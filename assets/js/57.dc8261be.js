(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{405:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("! "),e("a",{attrs:{href:"http://okfn.gr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Knowledge Greece"),e("OutboundLink")],1),t._v(" was one of 2017’s "),e("a",{attrs:{href:"https://toolfund.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Tool Fund"),e("OutboundLink")],1),t._v(" grantees tasked with extending implementation of core Frictionless Data libraries in R programming language. You can read more about this in "),e("a",{attrs:{href:"https://frictionlessdata.io/articles/open-knowledge-greece/",target:"_blank",rel:"noopener noreferrer"}},[t._v("their grantee profile"),e("OutboundLink")],1),t._v(". In this tutorial, "),e("a",{attrs:{href:"https://gr.linkedin.com/in/kleanthis-koupidis-8348b88b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kleanthis Koupidis"),e("OutboundLink")],1),t._v(", a Data Scientist and Statistician at Open Knowledge Greece, explains how to create Data Packages in R.")]),t._v(" "),e("p",[t._v("This tutorial will show you how to install the R library for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.")]),t._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("For this tutorial, we will need the Data Package R library ("),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.r"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cran.r-project.org/package=devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("devtools library"),e("OutboundLink")],1),t._v(" is required to install the "),e("code",[t._v("datapackage.r")]),t._v(" library from github.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    # Install devtools package if not already\n    install.packages("devtools")\n')])])]),e("p",[t._v("And then install the development version of "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.r"),e("OutboundLink")],1),t._v(" from github.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    devtools::install_github("frictionlessdata/datapackage-r")\n')])])]),e("h2",{attrs:{id:"load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" Load")]),t._v(" "),e("p",[t._v("You can start using the library by loading "),e("code",[t._v("datapackage.r")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datapackage.r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You can add useful metadata by adding keys to metadata dict attribute. Below, we are adding the required "),e("code",[t._v("name")]),t._v(" key as well as a human-readable "),e("code",[t._v("title")]),t._v(" key. For the keys supported, please consult the full "),e("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Package spec"),e("OutboundLink")],1),t._v(". Note, we will be creating the required "),e("code",[t._v("resources")]),t._v(" key further down below.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    dataPackage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Package.load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'period-table'")]),t._v("\n    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Periodic Table'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit the changes to Package class")]),t._v("\n    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("commit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1] TRUE")]),t._v("\n")])])]),e("h2",{attrs:{id:"infer-a-csv-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#infer-a-csv-schema"}},[t._v("#")]),t._v(" Infer a CSV Schema")]),t._v(" "),e("p",[t._v("We will use periodic-table data from "),e("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/datapackage-r/9eed05d1710fd69a0cb74f7941c7f142563f571b/vignettes/example_data/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("remote path"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("atomic.number")]),t._v(" "),e("th",[t._v("symbol")]),t._v(" "),e("th",[t._v("name")]),t._v(" "),e("th",[t._v("atomic.mass")]),t._v(" "),e("th",[t._v("metal.or.nonmetal.")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("H")]),t._v(" "),e("td",[t._v("Hydrogen")]),t._v(" "),e("td",[t._v("1.00794")]),t._v(" "),e("td",[t._v("nonmetal")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("He")]),t._v(" "),e("td",[t._v("Helium")]),t._v(" "),e("td",[t._v("4.002602")]),t._v(" "),e("td",[t._v("noble gas")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Li")]),t._v(" "),e("td",[t._v("Lithium")]),t._v(" "),e("td",[t._v("6.941")]),t._v(" "),e("td",[t._v("alkali metal")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Be")]),t._v(" "),e("td",[t._v("Beryllium")]),t._v(" "),e("td",[t._v("9.012182")]),t._v(" "),e("td",[t._v("alkaline earth metal")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("B")]),t._v(" "),e("td",[t._v("Boron")]),t._v(" "),e("td",[t._v("10.811")]),t._v(" "),e("td",[t._v("metalloid")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("C")]),t._v(" "),e("td",[t._v("Carbon")]),t._v(" "),e("td",[t._v("12.0107")]),t._v(" "),e("td",[t._v("nonmetal")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("N")]),t._v(" "),e("td",[t._v("Nitrogen")]),t._v(" "),e("td",[t._v("14.0067")]),t._v(" "),e("td",[t._v("nonmetal")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("O")]),t._v(" "),e("td",[t._v("Oxygen")]),t._v(" "),e("td",[t._v("15.9994")]),t._v(" "),e("td",[t._v("nonmetal")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("F")]),t._v(" "),e("td",[t._v("Fluorine")]),t._v(" "),e("td",[t._v("18.9984032")]),t._v(" "),e("td",[t._v("halogen")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("Ne")]),t._v(" "),e("td",[t._v("Neon")]),t._v(" "),e("td",[t._v("20.1797")]),t._v(" "),e("td",[t._v("noble gas")])])])]),t._v(" "),e("p",[t._v("We can guess our CSV’s "),e("router-link",{attrs:{to:"/table-schema/"}},[t._v("schema")]),t._v(" by using "),e("code",[t._v("infer")]),t._v(" from the Table Schema library. We pass directly the remote link to the infer function, the result of which is an inferred schema. For example, if the processor detects only integers in a given column, it will assign "),e("code",[t._v("integer")]),t._v(" as a column type.")],1),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    filepath "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/example_data/data.csv'")]),t._v("\n\n    schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tableschema.r"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("infer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Once we have a schema, we are now ready to add a "),e("code",[t._v("resource")]),t._v(" key to the Data Package which points to the resource path and its newly created schema. Below we define resources with three ways, using json text format with usual assignment operator in R list objects and directly using "),e("code",[t._v("addResource")]),t._v(" function of "),e("code",[t._v("Package")]),t._v(" class:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# define resources using json text")]),t._v("\n    resources "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers.from.json.to.list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      '"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filepath"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" schema\n    resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filepath\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or define resources using list object")]),t._v("\n    resources "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filepath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" schema\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("And now, add resources to the Data Package:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resources\n    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("commit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## [1] TRUE")]),t._v("\n")])])]),e("p",[t._v("Or you can directly add resources using "),e("code",[t._v("addResources")]),t._v(" function of "),e("code",[t._v("Package")]),t._v(" class:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    resources "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" filepath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" schema\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("addResource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Now we are ready to write our "),e("code",[t._v("datapackage.json")]),t._v(" file to the current working directory.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("    dataPackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example_data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("datapackage.json")]),t._v(" ("),e("a",{attrs:{href:"https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/exampledata/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("download"),e("OutboundLink")],1),t._v(") is inlined below. Note that atomic number has been correctly inferred as an "),e("code",[t._v("integer")]),t._v(" and atomic mass as a "),e("code",[t._v("number")]),t._v(" (float) while every other column is a "),e("code",[t._v("string")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('    jsonlite::prettify(helpers.from.list.to.json(dataPackage$descriptor))\n\n    ## {\n    ##     "profile": "data-package",\n    ##     "name": "period-table",\n    ##     "title": "Periodic Table",\n    ##     "resources": [\n    ##         {\n    ##             "name": "data",\n    ##             "path": "https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/example_data/data.csv",\n    ##             "schema": {\n    ##                 "fields": [\n    ##                     {\n    ##                         "name": "atomic number",\n    ##                         "type": "integer",\n    ##                         "format": "default"\n    ##                     },\n    ##                     {\n    ##                         "name": "symbol",\n    ##                         "type": "string",\n    ##                         "format": "default"\n    ##                     },\n    ##                     {\n    ##                         "name": "name",\n    ##                         "type": "string",\n    ##                         "format": "default"\n    ##                     },\n    ##                     {\n    ##                         "name": "atomic mass",\n    ##                         "type": "number",\n    ##                         "format": "default"\n    ##                     },\n    ##                     {\n    ##                         "name": "metal or nonmetal?",\n    ##                         "type": "string",\n    ##                         "format": "default"\n    ##                     }\n    ##                 ],\n    ##                 "missingValues": [\n    ##                     ""\n    ##                 ]\n    ##             },\n    ##             "profile": "data-resource",\n    ##             "encoding": "utf-8"\n    ##         }\n    ##     ]\n    ## }\n    ##\n')])])]),e("h2",{attrs:{id:"publishing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[t._v("#")]),t._v(" Publishing")]),t._v(" "),e("p",[t._v("Now that you have created your Data Package, you might want to "),e("router-link",{attrs:{to:"/blog/2016/08/29/publish-online/"}},[t._v("publish your data online")]),t._v(" so that you can share it with others.")],1),t._v(" "),e("p",[t._v("Now that you have created a data package in R, "),e("router-link",{attrs:{to:"/blog/2018/02/14/using-data-packages-in-r/"}},[t._v("find out how to use data packages in R in this tutorial")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);