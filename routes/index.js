var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs").promises;
const cors = require('cors');

const { PDFNet } = require('@pdftron/pdfnet-node');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/viewer/:id', cors(),async function(req, res, next) {
  const fileName = req.params.id;
  const searchTerm = req.query.searchTerm || "";

  res.render('viewer', { documentName: fileName, searchTerm: searchTerm });
});

router.post('/', async function(req, res, next) {
  const inputPath = "../server_documents/";
  const searchTerm = req.body.searchTerm;

  locals = { 
    searchResults: []
  }

  console.log(`Searching For: ${req.body.searchTerm}`);
  let documentCollection = await getDocuments(inputPath);
  console.log(`Started search through ${documentCollection.length} documents`);

  const searchResultList = [];

  await Promise.all(documentCollection.map( async document =>  {
    let test = await documentSearch(inputPath, document, searchTerm);
    searchResultList.push(test);
  }));

  locals.searchResults = searchResultList;
  locals.searchTerm = searchTerm;
  
  res.render("index", locals);
});

router.get('/sendFile/:id', cors(), async function(req, res, next) {
  const fileName = req.params.id;

  const options = {
    root: path.resolve(__dirname, "../server_documents"),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});

// Retrive Documents, this should be swapped out for a Database pull type function
async function getDocuments(inputPath) {
  let files = [];
  files = await fs.readdir(path.resolve(__dirname, inputPath), function(err, files) {
  });

  return files;
}

// Search through the document based on a search term being provided and return an Array of search results
async function documentSearch(inputPath, docName, searchTerm){
  let results = [];

  const main = async () => {
    const docUrl = path.resolve(__dirname, inputPath + docName);
    const doc = await PDFNet.PDFDoc.createFromFilePath(docUrl);

    const txtSearch = await PDFNet.TextSearch.create();
    let mode = PDFNet.TextSearch.Mode.e_whole_word;

    mode += PDFNet.TextSearch.Mode.e_reg_expression + PDFNet.TextSearch.Mode.e_highlight;
    txtSearch.setMode(mode);

    pattern = searchTerm;
    await txtSearch.setPattern(pattern);

    await txtSearch.begin(doc, pattern, mode);

    while(true) {
      let result = await txtSearch.run();

      if (result.code === PDFNet.TextSearch.ResultCode.e_found) {
        const hlts = result.highlights;
        const quadArr = await hlts.getCurrentQuads();
        const pages = result.page_num;

        results.push({name: docName, page: pages, quads: quadArr});
      }else{
        break;
      }
    }
  }

  await PDFNet.runWithCleanup(main, 'demo:1635863083431:788f199603000000002f844f5ddc4e2c3945c80ad809a07f0d574b0d52').then(function() {
    console.log("Process Complete");
  }).catch(err => console.log(err));

  return results;
}

module.exports = router;
