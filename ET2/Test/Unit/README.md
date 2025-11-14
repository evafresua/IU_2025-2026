How to run the articulo validation unit tests

Files:
- articulo_validation_test.html — lightweight browser-run test harness for the `articulo` validations.

How to run:
1) Open the file `Test/Unit/articulo_validation_test.html` in a modern browser (Chrome/Firefox). Example (from project root):

   open Test/Unit/articulo_validation_test.html

or drag the file into your browser.

2) The page will display PASS/FAIL results and also print details to the browser console.

Notes:
- This harness uses small mocked implementations of the helper classes used at runtime (`Validations`, `dom`, `ExternalAccess`) so it can run without the full application.
- If you prefer an automated run in CI, you can run the HTML in a headless browser (e.g. puppeteer or Playwright). I didn't create a Node-based runner here because Node wasn't available in the execution environment; if you want, I can add a headless script and package.json to run it automatically.
