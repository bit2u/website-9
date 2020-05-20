(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{272:function(t,a,s){t.exports=s.p+"assets/img/camimage1.409b3ea6.png"},390:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("h3",{attrs:{id:"problem-we-were-trying-to-solve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-we-were-trying-to-solve"}},[t._v("#")]),t._v(" Problem We Were Trying To Solve")]),t._v(" "),e("p",[t._v("Stephen Eglen was looking to investigate the applicability of the Data Package concept to facilitate data reuse in the field of Computational Neuroscience. The following figure describes the kind of data he is collecting.  He was eventually seeking to get around 100–160 fields like this. Each circle is a cell drawn approximately to scale. The units of measurement are microns (micrometers).")]),t._v(" "),e("p",[e("img",{attrs:{src:s(272),alt:"ADBio"}})]),t._v(" "),e("p",[t._v("The basic data are quite simple: two columns of numbers that describes the center of each circle where each circle represents a "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Retinal_ganglion_cell",target:"_blank",rel:"noopener noreferrer"}},[t._v("retinal ganglion cell"),e("OutboundLink")],1),t._v(".  The metadata that adds context to this data are as follows: the radius of each circle is 10um representing the average radius of this cell type; the dashed line represents the sample window which is the region of space within which the cells were sampled; the species from which the cells were sampled is a cat.")]),t._v(" "),e("p",[t._v("The key question posed by the collection of such data in large quantities is “where to store all these metadata”. More formally, Stephen wanted a way to include the following metadata with sampled data:")]),t._v(" "),e("ol",[e("li",[t._v("Cell type: on center retinal ganglion cells")]),t._v(" "),e("li",[t._v("Species: cat")]),t._v(" "),e("li",[t._v("Radius of "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Soma_(biology)"}},[t._v("soma")]),t._v(": 10 um")]),t._v(" "),e("li",[t._v("Citation to original paper where data were presented: Wässle H, Boycott BB, Illing RB (1981) Morphology and mosaic of on- and off-beta cells in the cat retina and some functional considerations. Proc R Soc Lond B Biol Sci 212:177–195.")]),t._v(" "),e("li",[t._v("Unit of measurement: micron.")]),t._v(" "),e("li",[t._v("(Optionally) A raw image from where the data where taken. e.g. "),e("a",{attrs:{href:"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("The long-term goal was to build a website/repository containing about 100+ examples of these “retinal mosaics”. The website would allow people to view the mosaics, download the data files, or run online some simple analysis.")]),t._v(" "),e("h2",{attrs:{id:"the-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-work"}},[t._v("#")]),t._v(" The Work")]),t._v(" "),e("h3",{attrs:{id:"what-did-we-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-did-we-do"}},[t._v("#")]),t._v(" What Did We Do")]),t._v(" "),e("p",[t._v("The Data Package specification is meant to be a container for data providing a consistent interface to tabular data. The Data Package specification outlines a number of different fields that can be stored within a descriptor file, "),e("code",[t._v("datapackage.json")]),t._v(". For instance, for this example, we can assign a title to this Data Package by setting the field "),e("code",[t._v("title")]),t._v(" to “Example Retinal Mosaic”:")]),t._v(" "),e("p",[e("code",[t._v('"title" : "Example Retinal Mosaic"')])]),t._v(" "),e("p",[t._v("We can also, for instance, set a "),e("code",[t._v("homepage")]),t._v(" for the dataset which is a URL for the home on the web that is related to this Data Package.")]),t._v(" "),e("p",[e("code",[t._v('"homepage": "http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/"')])]),t._v(" "),e("p",[t._v("Some of the other metadata Stephen required do not, however, map well to existing specified fields in a Data Package.  For instance, as the Data Package is not specialized for storing biological data, there is no field for “species”.  (The Digital Curation Centre maintains a database of domain-specific metadata standards for biology and other fields.)  The specification is intended to be quite flexible in these circumstances:")]),t._v(" "),e("blockquote",[e("p",[t._v("Adherence to the specification does not imply that additional, non-specified properties cannot be used: a descriptor MAY include any number of properties in additional to those described as required and optional properties […] This flexibility enables specific communities to extend Data Packages as appropriate for the data they manage.")])]),t._v(" "),e("p",[t._v("As an example, we stored the radius in a new field called "),e("code",[t._v("soma-radius")]),t._v(" in the “root” level of the Data Package:")]),t._v(" "),e("p",[e("code",[t._v('"soma-radius": 10')])]),t._v(" "),e("p",[t._v("While there are many different ways in which this particular element of metadata could have been stored, this was a good start that would allow easy iteration.  In storing this metadata in the datapackage.json, Data Package-aware tooling could read it with the data.")]),t._v(" "),e("p",[t._v("For example, using the Data Package library (“datapkg”) written by ROpenSci, we can replace multiple calls to the data input functions (in this case, Stephen used the "),e("code",[t._v("read.table()")]),t._v(" and "),e("code",[t._v("scan()")]),t._v(" functions with a single call to "),e("code",[t._v("datapkg_read()")]),t._v(" and store the result in a new object which combines both metadata and data called rmdp.")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# install_github("frictionlessdata/datapackage-r")')]),t._v("\nlibrary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datapkg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrmdp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" datapkg_read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# read soma radius from rmdp")]),t._v("\nsoma.rad "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rmdp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("`soma"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("radius`\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# read other metadata from the same object")]),t._v("\non "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rmdp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("points\nw "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rmdp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("window\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plot")]),t._v("\nplot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" asp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bty"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsymbols"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" circles"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("soma.rad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("inch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" rect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lty"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Below is the annotated datapackage.json with the metadata at the top followed by the resource information. As a start, we have included information on cell type, species, and units in the description, but we can easily create new fields to store these fields in a more structured way as we did with "),e("code",[t._v("soma-radius")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example-retinal-mosaic"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Retinal Mosaic"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Homepage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Image"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an example retinal mosaic Data Package."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cell type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on center"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"soma-radius"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("I’ve used a "),e("code",[t._v("sources")]),t._v(" array with a single source object:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wässle H, Boycott BB, Illing RB (1981) Morphology and mosaic of on- and off-beta cells in the cat retina and some functional considerations. Proc R Soc Lond B Biol Sci 212:177–195."')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("resources")]),t._v(" array in datapackage.json listed the files in the original datasets with "),e("code",[t._v("dialect")]),t._v(" and "),e("code",[t._v("schema")]),t._v(" information included. We named the first resource “points” with the filename set in "),e("code",[t._v("path")]),t._v(".  Because it is a space-delimited tabular file without a header, we needed to pass that information to the "),e("code",[t._v("dialect")]),t._v(" attribute so that "),e("code",[t._v("datapkg_read()")]),t._v(" can read the file. The "),e("code",[t._v("schema")]),t._v(" attribute specifies the "),e("code",[t._v("type")]),t._v(" of all the values in the table (e.g. “number”) as well as additional "),e("code",[t._v("constraints")]),t._v(" on the value. Stephen noted that you can’t have an x coordinate without the y, so we have set "),e("code",[t._v("required")]),t._v(" to true for both fields. In addition, Stephen noted that the “window” rectangle is a simple validation on the data, so I have translated the x and y bounds of the window to constraining conditions on each column. We do understand that assessing the validity of such data can be more complicated, however.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"points"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w81s1on.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dialect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delimiter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"constraints"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.08")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maximum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("778.08")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"y"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"constraints"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maximum"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1007.02")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("For the completeness of the example, we have also added a resource for the “window” rectangle even though (a) we have already stored this data in the "),e("code",[t._v("constraints")]),t._v(" key of the points matrix and (b) it is ideally stored as a vector not a data frame. The benefit of this method is the ability to load all the data files at once and reference them from a common datapackage.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w81s1w.txt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dialect"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delimiter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmax"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ymin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ymax"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"review"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[t._v("#")]),t._v(" Review")]),t._v(" "),e("h3",{attrs:{id:"how-effective-was-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-effective-was-it"}},[t._v("#")]),t._v(" How Effective Was It")]),t._v(" "),e("p",[t._v("The pilot tackled an interesting use case: providing a generic “home” for metadata related to an experiment,"),e("br"),t._v("\nin a way that is clear and easy to read without the overhead of a more advanced, domain-specific specification."),e("br"),t._v("\nIn a more complicated example, storing the metadata with the data for each sample—paired with a tool that could"),e("br"),t._v("\nread this metadata—could provide an “object-oriented” style of working with experimental data.")]),t._v(" "),e("p",[t._v("We have not tried this out on multiple samples (this is forthcoming), so we don’t have much information yet on"),e("br"),t._v("\nthe usefulness of this approach, but the exercise raised several important issues to potentially address with the"),e("br"),t._v("\nData Package format:")]),t._v(" "),e("ol",[e("li",[t._v("Stephen’s request for a specified location for storing units in a structured way comes up often: "),e("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/216",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/specs/issues/216"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("More iterations, with more of a variety of data sources could help in trialling this")]),t._v(" "),e("li",[t._v("Stephen wanted to store a non-tabular data file (an image) with the tabular datasets that comprise his datasets.  This is currently not allowed, but the subsequent definition of a Tabular Data Resource could pave the way for a method of specifying types of different resources and the kind of processing, validation or otherwise, that could be done with each.")])]),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("h3",{attrs:{id:"areas-for-future-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#areas-for-future-work"}},[t._v("#")]),t._v(" Areas for future work")]),t._v(" "),e("p",[t._v("Stephen now has about 100 retinal mosaics that might make for a nice use case of the Data Package. In addition, The Frictionless Data Tool Fund has funded the development of the next version of the R Data Package. This will make some of the improvements brought to the Data Package specifications  in the past few months available in the R library.")])])}),[],!1,null,null,null);a.default=n.exports}}]);