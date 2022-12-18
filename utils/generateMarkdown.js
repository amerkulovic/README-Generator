function renderLicenseBadge(license) {
  let licenseString = "";
  if (license === "Apache2.0") {
    licenseString = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    licenseString = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD") {
    licenseString = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    licenseString = "";
  }
  return licenseString;
}

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}`;
}

module.exports = generateMarkdown;
