(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{311:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This section requires knowledge on how to "),a("router-link",{attrs:{to:"/field-guide/well-packaged-datasets/#write-a-table-schema"}},[e._v("write a Table Schema")]),e._v(" and "),a("router-link",{attrs:{to:"/field-guide/well-packaged-datasets/#add-your-dataset-s-metadata"}},[e._v("attach descriptive metadata")]),e._v(" to your data collection.")],1),e._v(" "),a("p",[e._v("Creating and Sharing Data Packages is important for both data publishers and data users because it provides a common and open specification to describe your dataset’s metadata. This facilitates data reuse, as users don’t need to understand each data publisher’s specific metadata format, and as the specification is machine-readable, it also allows tools to parse the metadata. This enables software to:")]),e._v(" "),a("ul",[a("li",[e._v("Import the data packages into different tools and languages, like Python and R")]),e._v(" "),a("li",[e._v("Validate the data contents according to the schema described in the data package")]),e._v(" "),a("li",[e._v("Convert the data package into other formats, for example loading it into a SQL database for further analysis")])]),e._v(" "),a("p",[e._v("Although these reasons are not unique to publishing data as data packages, here’s why we think data publishers should consider publishing in this format:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Archiving data collections using data packages ensure data publishers can update data  more efficiently at any time. The associated schema is a guide on existing data fields and acceptable data types for individual tabular data resources and can be easily built upon.")])]),e._v(" "),a("li",[a("p",[e._v("Sharing data with descriptive metadata and its associated schema provides context for your data no matter where it is used, and significantly cuts down on time spent researching data provenance before using acquired data.")])]),e._v(" "),a("li",[a("p",[e._v("Data Packages allow for accountability and enrich the feedback process as data publishers can add metadata with contact information for users to reach out to them and licensing to spell out accepted use of published data.")])])]),e._v(" "),a("p",[e._v("If don’t need your own data portal, there are many platforms where you can publish your data (if you need your own, check "),a("a",{attrs:{href:"https://ckan.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CKAN"),a("OutboundLink")],1),e._v("). In the section below, we dive into a few options. Read along and decide what option is most suitable:")]),e._v(" "),a("h2",{attrs:{id:"publish-packaged-data-in-our-community-ckan-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-packaged-data-in-our-community-ckan-instance"}},[e._v("#")]),e._v(" Publish Packaged Data in our community CKAN instance")]),e._v(" "),a("p",[e._v("CKAN is an open source platform for publishing data that makes it easy to discover, use and share data. "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" is a public instance of CKAN that allows anyone to publish their data.")]),e._v(" "),a("p",[e._v("Here’s why you should consider creating an organization on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" and publishing datasets therein:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://datahub.ckan.ioo",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" is free for all to use! The file upload size limit on the platform is currently 100mb.")]),e._v(" "),a("li",[e._v("The decision on whether to publicly or privately publish datasets rests with data publishers.")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" organizations allow for multiple users to collaborate with varied privileges:")]),e._v(" "),a("li",[a("strong",[e._v("Admin")]),e._v(": Can add/edit and delete datasets, as well as manage organization members.")]),e._v(" "),a("li",[a("strong",[e._v("Editor")]),e._v(": Can add and edit datasets, but not manage organization members.")]),e._v(" "),a("li",[a("strong",[e._v("Member")]),e._v(": Can view the organization’s private datasets, but not add new datasets.")])]),e._v(" "),a("p",[e._v("To publish data on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Request for a new Organization to be created on the platform for you via "),a("a",{attrs:{href:"https://discuss.okfn.org/c/open-knowledge-labs/datahub",target:"_blank",rel:"noopener noreferrer"}},[e._v("our community page"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nThis is required only to ensure spammers don’t take up space and hog resources on the platform.")]),e._v(" "),a("p",[e._v("The request format is simple and requires:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Title")]),e._v(": This will be the name of your Organization on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" i.e."),a("br"),a("br"),e._v(" "),a("em",[e._v("My New Organization")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Slug")]),e._v(": This is an acronym, word or hyphenated phrase that will be added to the end of the "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" url to uniquely identify your Organization and associate your data collections with it i.e."),a("br"),a("br"),e._v(" "),a("em",[e._v("my-new-organization")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Username")]),e._v(": The username you provide is associated with an email address on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" and allows us to give you admin access to your Organization on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("li",[a("p",[e._v("Log In and add new datasets")])])]),e._v(" "),a("p",[e._v("Adding datasets on "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" is no different from using any other CKAN platform, but "),a("a",{attrs:{href:"http://okfnlabs.org/blog/2016/07/25/publish-data-packages-to-datahub-ckan.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here’s a good guide by Dan Fowler"),a("OutboundLink")],1),e._v(" for first timers.")]),e._v(" "),a("p",[e._v("3.Publish and share public datasets widely.")]),e._v(" "),a("p",[e._v("On "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(", you can either publish datasets privately, meaning only members of your organization have access to them, or publicly, as open data. "),a("a",{attrs:{href:"http://okfnlabs.org/blog/2016/07/25/publish-data-packages-to-datahub-ckan.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Find out more"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"publish-packaged-data-on-datahub-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-packaged-data-on-datahub-io"}},[e._v("#")]),e._v(" Publish Packaged Data on "),a("a",{attrs:{href:"http://DataHub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://DataHub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1),e._v(" is a platform for finding, sharing and publishing high quality data online.")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.ckan.io"),a("OutboundLink")],1),e._v(" share the same name for historical reasons. "),a("a",{attrs:{href:"http://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datahub.ckan.io"),a("OutboundLink")],1),e._v(" used to be the DataHub, but was moved to its current address, and the current DataHub uses new software developed from scratch.")]),e._v(" "),a("ol",[a("li",[e._v("Set up a data publisher / user account on "),a("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Join the "),a("a",{attrs:{href:"https://gitter.im/datahubio/chat",target:"_blank",rel:"noopener noreferrer"}},[e._v("datahub.io community group"),a("OutboundLink")],1),e._v(", introduce yourself and request for an account.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Publish Datasets on "),a("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("a",{attrs:{href:"http://datahub.io/docs/getting-started/publishing-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post"),a("OutboundLink")],1),e._v(" provides helpful information on publishing datasets on "),a("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub.io"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"publish-packaged-data-on-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-packaged-data-on-github"}},[e._v("#")]),e._v(" Publish Packaged Data on GitHub")]),e._v(" "),a("p",[e._v("GitHub is the largest repository of source code, with "),a("a",{attrs:{href:"https://github.com/blog/2345-celebrating-nine-years-of-github-with-an-anniversary-sale",target:"_blank",rel:"noopener noreferrer"}},[e._v("more than 20 million"),a("br"),e._v("\nusers"),a("OutboundLink")],1),e._v(". Although the focus is on hosting source code, any type of file can be hosted. Documents, thesis, images, shapefiles, you can even host an entire static website with "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Pages"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("By using GitHub, you get all the advantages of using a version control system as Git, where every modification to your files is tracked. You also get an issue ticketing system, wiki pages, milestones tracking, and other useful"),a("br"),e._v("\ncollaboration tools.")]),e._v(" "),a("p",[e._v("** What types of datasets can be hosted on GitHub?**")]),e._v(" "),a("p",[e._v("Although GitHub offers many useful functionalities, not all datasets are a good fit for it. The main limitations are:")]),e._v(" "),a("ul",[a("li",[e._v("Individual files have less than 100 MB")]),e._v(" "),a("li",[e._v("Entire repository have less than 1 GB\n"),a("ul",[a("li",[e._v("The repository size includes not only the current files, but all of their previous versions.")])])])]),e._v(" "),a("p",[e._v("You can store larger files using "),a("a",{attrs:{href:"https://git-lfs.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git-lfs"),a("OutboundLink")],1),e._v(", but we won’t go in details about it on this post.")]),e._v(" "),a("p",[e._v("It’s also useful if your data files use text-based file formats like CSV or GeoJSON, as then git is able to show you exactly what changed between two versions of the files. However, even if you use binary file formats like XLS, GitHub is still useful.")]),e._v(" "),a("p",[e._v("** Step 1. Organise your dataset folder structure **")]),e._v(" "),a("p",[e._v("The way to structure your dataset depends on your data, and what extra artifacts it contains (e.g. images, scripts, reports, etc.). In this section, we’ll show a complete example with:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Data files")]),e._v(": The files with the actual data (e.g. CSV, XLS, GeoJSON, …)")]),e._v(" "),a("li",[a("strong",[e._v("Documentation")]),e._v(": How was the data collected, any caveats, how to update it, etc.")]),e._v(" "),a("li",[a("strong",[e._v("Metadata")]),e._v(": Where the data comes from, what’s in the files, what’s their source and license, etc.")]),e._v(" "),a("li",[a("strong",[e._v("Scripts")]),e._v(": Software scripts that were used to generate, update, or modify the data.")])]),e._v(" "),a("p",[e._v("Even though we’ll see an example that has all of these different types of files, this isn’t always the case. For example, datasets that were manually collected might not have any scripts.")]),e._v(" "),a("p",[e._v("This is the final structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("data/\n    schools.csv\n    cities.csv\ndocs/\n    screenshot.png\nscripts/\n    clean_data.py\nMakefile\ndatapackage.json\nREADME.md\n")])])]),a("ul",[a("li",[a("strong",[e._v("data/")]),e._v(": All data files are contained in this folder. In our example, there are two: "),a("code",[e._v("data/schools.csv")]),e._v(" and "),a("code",[e._v("data/cities.csv")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("docs/")]),e._v(": Images, sample analysis, and other documentation files regarding the dataset. The main documentation is in "),a("code",[e._v("README.md")]),e._v(", but in this folder you can add any images used in the README, and other writings about the dataset.")]),e._v(" "),a("li",[a("strong",[e._v("scripts/")]),e._v(": All scripts are contained in this folder. There could be scripts to scrape the data, join different files, clean them, etc. Depending on the programming language you use, you might also add requirements files like "),a("code",[e._v("requirements.txt")]),e._v(" for Python, or "),a("code",[e._v("package.json")]),e._v(" for NodeJS.")]),e._v(" "),a("li",[a("strong",[e._v("Makefile")]),e._v(": The scripts are only part of the puzzle, we also need to know how to run them. In which order they should be executed, which one should I run to update the data, and so on. You could document this information textually in the "),a("code",[e._v("README.md")]),e._v(" file, but the "),a("code",[e._v("Makefile")]),e._v(" allows you to have executable documentation. You can think of it as a script to run the scripts. If you have never written a Makefile, read "),a("a",{attrs:{href:"https://bost.ocks.org/mike/make/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Use Make"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("datapackage.json")]),e._v(": This file describes the dataset’s metadata. For example, what is the dataset, where are its files, what they contain, what each column means (for tabular data), what’s the source, license, and authors, and so on. As it’s a machine-readable specification, other software can import and validate your files. See HOW TO CREATE A DATA PACKAGE on instructions on writing this file.")]),e._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),a("OutboundLink")],1)]),e._v(": This is where the dataset is described for humans. We recommend the following sections:\n"),a("ul",[a("li",[a("strong",[e._v("Introduction")]),e._v(": A short description of the dataset, what it contains, the time or geographical area it covers")]),e._v(" "),a("li",[a("strong",[e._v("Data")]),e._v(": What the data structure? Does it use any codes? How do you define missing values (e.g. ‘N/A’ or ‘-1’)")]),e._v(" "),a("li",[a("strong",[e._v("Preparation")]),e._v(": How was the data collected? How do I update the data? Was it modified in any way? If you have a "),a("code",[e._v("Makefile")]),e._v(", this section will mostly document how to run it. Otherwise you can describe how to run the scripts, or how to collect the data manually.")]),e._v(" "),a("li",[a("strong",[e._v("License")]),e._v(": There are two issues here: the license of the data itself, and the license of the package you are creating (including any scripts). Our recommendation is to license the package you created as "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",title:"Creative Commons Public Domain Dedication",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(", and add any relevant information or disclaimers regarding the source data’s license.")])])])]),e._v(" "),a("p",[e._v("To summarize, these are the folders, files, and their respective contents in this structure:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Path")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Contents")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("data/")]),e._v(" "),a("td",[e._v("Data")]),e._v(" "),a("td",[e._v("Dataset’s data files.")])]),e._v(" "),a("tr",[a("td",[e._v("docs/")]),e._v(" "),a("td",[e._v("Documentation")]),e._v(" "),a("td",[e._v("Images, analysis, and other documentation files.")])]),e._v(" "),a("tr",[a("td",[e._v("scripts/")]),e._v(" "),a("td",[e._v("Scripts")]),e._v(" "),a("td",[e._v("Scripts used for creating, modifying, or analysing the dataset.")])]),e._v(" "),a("tr",[a("td",[e._v("Makefile")]),e._v(" "),a("td",[e._v("Scripts")]),e._v(" "),a("td",[e._v("Executable documentation on how to run the scripts.")])]),e._v(" "),a("tr",[a("td",[e._v("datapackage.json")]),e._v(" "),a("td",[e._v("Metadata")]),e._v(" "),a("td",[e._v("Data Package descriptor file.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Documentation")]),e._v(" "),a("td",[e._v("Textual description of the dataset with description, preparation steps, license, etc.")])])])]),e._v(" "),a("p",[e._v("** Step 2. Upload the dataset to GitHub **")]),e._v(" "),a("ol",[a("li",[e._v("Login (or create) a new account on GitHub")]),e._v(" "),a("li",[e._v("Create "),a("a",{attrs:{href:"https://github.com/new",title:"GitHub New Repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("a new repository"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Write a short description about the dataset")])])]),e._v(" "),a("li",[e._v("On your repository page, click on the “Upload files” link")]),e._v(" "),a("li",[e._v("Upload the files you created in the previous step\n"),a("ul",[a("li",[e._v("If your have files larger than 25 MB, you’ll need to either "),a("a",{attrs:{href:"https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/",title:"Adding a file to a repository using the command line",target:"_blank",rel:"noopener noreferrer"}},[e._v("upload using the command line"),a("OutboundLink")],1),e._v(", or the "),a("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Desktop client"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("p",[e._v("** (Optional) Step 3. Enable automatic tabular data validation **")]),e._v(" "),a("p",[e._v("You can automatically validate your tabular data files using "),a("a",{attrs:{href:"https://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),a("OutboundLink")],1),e._v(". This will take only a few minutes, and will ensure you’ll always know when there are errors with your dataset, maintaining its quality. "),a("a",{attrs:{href:"/field-guide/automatically-validated-tabular-data"}},[e._v("Read the walkthrough here")]),e._v(".")]),e._v(" "),a("p",[e._v("The sample datasets used in this example, that is, List of schools in Birmingham, UK are available "),a("a",{attrs:{href:"https://github.com/vitorbaptista/birmingham_schools",target:"_blank",rel:"noopener noreferrer"}},[e._v("in this repository"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);