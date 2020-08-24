(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{429:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This tutorial is about how to publish your Data Package online for others to find and use.")]),e._v(" "),a("p",[e._v("It assumes you have already finished packaging up your data as a Data Package (if not, "),a("router-link",{attrs:{to:"/blog/2018/07/16/publish-data-as-data-packages/"}},[e._v("check out the instructions here")]),e._v(").")],1),e._v(" "),a("h2",{attrs:{id:"it’s-only-files-online"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#it’s-only-files-online"}},[e._v("#")]),e._v(" It’s Only Files Online")]),e._v(" "),a("p",[e._v("Publishing your Data Package is incredibly simple: you just need to post it online somewhere that others can access.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" if you just want to to share your Data Package with a few others you can just send it directly, for example via email. Since a Data Package is just some files there are as many ways to do this as there are ways to put files online. Here we will just provide some general tips and illustrate some of the most popular publishing options.")]),e._v(" "),a("p",[a("strong",[e._v("Advertise it")])]),e._v(" "),a("p",[e._v("Once you have published your data package you may want to advertise it to others. One way to advertise the existence of your dataset is to add it to the catalog-list file in the "),a("a",{attrs:{href:"https://github.com/datasets/registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("registry repo"),a("OutboundLink")],1),e._v(", it will then automagically appear as a community dataset on the "),a("a",{attrs:{href:"http://data.okfn.org/data",target:"_blank",rel:"noopener noreferrer"}},[e._v("data.okfn.org"),a("OutboundLink")],1),e._v(" site")]),e._v(" "),a("h2",{attrs:{id:"github-bitbucket-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-bitbucket-etc"}},[e._v("#")]),e._v(" Github, Bitbucket etc")]),e._v(" "),a("p",[e._v("One nice option for the more sophisticated is to manage your Data Package in a git or mercurial repo and push it to github, gitorious, bitbucket or similar.")]),e._v(" "),a("h2",{attrs:{id:"s3-google-storage-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-google-storage-etc"}},[e._v("#")]),e._v(" S3, Google Storage etc")]),e._v(" "),a("p",[e._v("Cloud storage like S3 and Google Storage are perfect for storing your Data Packages.")]),e._v(" "),a("h2",{attrs:{id:"google-drive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-drive"}},[e._v("#")]),e._v(" Google Drive")]),e._v(" "),a("p",[e._v("The directory structure of a Data Package shared on Google Drive must be flat; that is, the Data Package must not contain any folders.")]),e._v(" "),a("p",[a("strong",[e._v("OK")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("shared-folder\n|-- datapackage.json\n|-- README.md\n|-- data.csv\n")])])]),a("p",[a("strong",[e._v("Not OK")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("shared-folder\n|-- datapackage.json\n|-- README.md\n|-- data\n    |-- data.csv\n")])])]),a("ol",[a("li",[a("p",[e._v("Upload your Data Package folder ("),a("a",{attrs:{href:"https://support.google.com/drive/answer/2424368",target:"_blank",rel:"noopener noreferrer"}},[e._v("help"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Change your folder’s share setting to "),a("strong",[e._v("Public on the web - Anyone on the Internet can find and view")]),e._v(" ("),a("a",{attrs:{href:"https://support.google.com/drive/answer/2494886",target:"_blank",rel:"noopener noreferrer"}},[e._v("help"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Get a shareable link for your folder ("),a("a",{attrs:{href:"https://support.google.com/drive/answer/2494822",target:"_blank",rel:"noopener noreferrer"}},[e._v("help"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Find your folder’s ID in the link")])])]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Example Link:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("https://drive.google.com/open?id=0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM&authuser=0")])])])]),e._v(" "),a("li",[a("em",[e._v("Example ID:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM")])])])])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Your "),a("code",[e._v("datapackage.json")]),e._v(" link is "),a("code",[e._v("https://googledrive.com/host/{ID}/datapackage.json")]),e._v("; for example, using the "),a("em",[e._v("Example ID")]),e._v(" from the previous step, the "),a("code",[e._v("datapackage.json")]),e._v(" link is:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("https://googledrive.com/host/0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM/datapackage.json")])])]),e._v(" "),a("h2",{attrs:{id:"dropbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dropbox"}},[e._v("#")]),e._v(" Dropbox")]),e._v(" "),a("p",[e._v("Just upload your files to Dropbox.")]),e._v(" "),a("p",[e._v("You do need to be a bit careful as Dropbox does not always replicate your local file layout in its online URLs. Therefore, make sure you read the "),a("a",{attrs:{href:"#key-tips"}},[e._v("Key Tips")]),e._v(" section below.")]),e._v(" "),a("h2",{attrs:{id:"key-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-tips"}},[e._v("#")]),e._v(" Key Tips")]),e._v(" "),a("p",[e._v("However you publish your Data Package there are a few key points to keep in"),a("br"),e._v("\nmind:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("All the files in the Data Package should be accessible online")])]),e._v(" "),a("li",[a("p",[e._v("The structure of your Data Package should be preserved. Specifically the paths between your "),a("code",[e._v("datapackage.json")]),e._v(" and the data files must be preserved. For example, if your Data Package directory looked like this on disk:")]),e._v(" "),a("pre",[a("code",[e._v("datapackage.json\ndata.csv\nsomedir/other-data.csv\n")])]),e._v(" "),a("p",[e._v("then online it should look like:")]),e._v(" "),a("pre",[a("code",[e._v("http://your.website.com/mydatapackage/datapackage.json\nhttp://your.website.com/mydatapackage/data.csv\nhttp://your.website.com/mydatapackage/somedir/other-data.csv\n")])]),e._v(" "),a("p",[e._v("This can be a problem with services like e.g. Google Drive where files in a given folder don’t have a web address that relates to that folder. The reason we need to preserve relative paths is that when using the Data Package client software will compute the full path from the location of the "),a("code",[e._v("datapackage.json")]),e._v(" itself plus the relative path for the file give in the "),a("code",[e._v("datapackage.json")]),e._v(" resources section.")])])]),e._v(" "),a("p",[e._v("Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive "),a("a",{attrs:{href:"/data-package"}},[e._v("Frictionless Data Field Guide")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);