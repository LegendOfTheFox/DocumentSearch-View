<h1>Document Search Example</h1>

<h2>Overview</h2>

This sample application utilizes both PDFNet and PDFJS.Express to show a search and view workflow. This architecture is not meant for production, rather a starting point to how to work with the two SDKs. Changes you would want to consider would be implementing a real database, Authentication on server endpoints, and proper exception catching and handling. This sample should run as is, there are 3 sample document in the server_documents folder to act as a pseudo database. Feel free to drop your own documents into that directory for testing.

<h2>Dependencies</h2>

<ul>
  <li>PDFNet</li>
  <li>PDFJS.Express</li>
  <li>Node.JS</li>
  <li>Express Server</li>
  <li>CORS</li>
</ul>

<h2>Getting Started</h2>

<ul>
  <li>Run NPM Install from the root directory</li>
  <li>Run NPM start</li>
  <li>The application defaults to Port 3000</li>
</ul>

<h2>API Reference</h2>

<ul>
  <li>https://pdfjs.express/api/</li>
  <li>https://www.pdftron.com/api/pdfnet-node/PDFNet.html</li>
</ul>

<h2>Disclaimer</h2>

<p>
  Both PDFNet & PDFJS.Express SDKs are commercial solutions. In this sample both SDKs are running in a trial mode, resulting in watermarking on the document displayed.
  Please reach out to PDFTron https://www.pdftron.com/form/contact-sales/ for PDFNet licensing, PDFJS.Express licesning can be done directly through pdfjs.express website.
</p>
