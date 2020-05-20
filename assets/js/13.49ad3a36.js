(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{315:function(t,e,a){t.exports=a.p+"assets/img/figure-1.ab449321.png"},316:function(t,e,a){t.exports=a.p+"assets/img/figure-2.b334817a.png"},317:function(t,e,a){t.exports=a.p+"assets/img/figure-3.7144591c.png"},318:function(t,e,a){t.exports=a.p+"assets/img/figure-4.478e4974.gif"},319:function(t,e,a){t.exports=a.p+"assets/img/figure-5.e20a138b.gif"},421:function(t,e,a){"use strict";a.r(e);var o=a(1),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Errors in data are not uncommon. They also often get in the way of quick and timely data analysis for many data users. What if there was a way to quickly identify errors in your data to accelerate the process by which you fix them before sharing your data or using it for analysis?")]),t._v(" "),o("p",[t._v("In this section, we will learn how to carry out one-time data validation using")]),t._v(" "),o("ul",[o("li",[t._v("a free web tool called "),o("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(",")]),t._v(" "),o("li",[t._v("the goodtables command line tool which you use in your local machine.")])]),t._v(" "),o("p",[t._v("Our working assumption is that you already know what a data schema and a data package are, and how to create them. If not, "),o("router-link",{attrs:{to:"/blog/2018/03/07/well-packaged-datasets/"}},[t._v("start here")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"one-time-data-validation-with-try-goodtables-io"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-time-data-validation-with-try-goodtables-io"}},[t._v("#")]),t._v(" One-time data validation with "),o("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Now that you have your data package you may want to check it for errors. We refer to this process as data validation. Raw data is often ‘messy’ or ‘dirty’, which means it contains errors and irrelevant bits that make it inaccurate and difficult to quickly analyse and draw insight from existing datasets. "),o("strong",[t._v("Goodtables")]),t._v(" exists to identify structural and content errors in your tabular data so they can be fixed quickly. As with other tools mentioned in this field guide, goodtables aims to help data publishers improve the quality of their data before the data is shared elsewhere and used for analysis, or archived.")]),t._v(" "),o("p",[o("strong",[t._v("Types of errors identified in the validation process")])]),t._v(" "),o("p",[t._v("Here are some of the errors that "),o("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" highlights. A more exhaustive list is available "),o("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py#validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[o("strong",[t._v("Structural Errors")])]),t._v(" "),o("th")])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("blank-header")]),t._v(" "),o("td",[t._v("There is a blank header name. All cells in the header row must have a value.")])]),t._v(" "),o("tr",[o("td",[t._v("duplicate-header")]),t._v(" "),o("td",[t._v("There are multiple columns with the same name. All column names must be unique.")])]),t._v(" "),o("tr",[o("td",[t._v("blank-row")]),t._v(" "),o("td",[t._v("Rows must have at least one non-blank cell.")])]),t._v(" "),o("tr",[o("td",[t._v("duplicate-row")]),t._v(" "),o("td",[t._v("Rows can’t be duplicated.")])]),t._v(" "),o("tr",[o("td",[t._v("extra-value")]),t._v(" "),o("td",[t._v("A row has more columns than the header.")])]),t._v(" "),o("tr",[o("td",[t._v("missing-value")]),t._v(" "),o("td",[t._v("A row has less columns than the header.")])]),t._v(" "),o("tr",[o("td",[o("strong",[t._v("Content Errors")])]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("schema-error")]),t._v(" "),o("td",[t._v("Schema is not valid.")])]),t._v(" "),o("tr",[o("td",[t._v("non-matching-header")]),t._v(" "),o("td",[t._v("The header’s name in the schema is different from what’s in the data.")])]),t._v(" "),o("tr",[o("td",[t._v("extra-header")]),t._v(" "),o("td",[t._v("The data contains a header not defined in the schema.")])]),t._v(" "),o("tr",[o("td",[t._v("missing-header")]),t._v(" "),o("td",[t._v("The data doesn’t contain a header defined in the schema.")])]),t._v(" "),o("tr",[o("td",[t._v("type-or-format-error")]),t._v(" "),o("td",[t._v("The value can’t be cast based on the schema type and format for this field.")])])])]),t._v(" "),o("p",[o("strong",[t._v("Load tabular data for one-time validation")])]),t._v(" "),o("p",[t._v("You can add a dataset for one-time validation on "),o("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" in two ways:")]),t._v(" "),o("ul",[o("li",[t._v("If your tabular data is publicly available online, obtain a link to the tabular data you would like to validate and paste it in the "),o("strong",[t._v("{Source}")]),t._v(" section.")]),t._v(" "),o("li",[t._v("Alternatively, Click on the Upload file prompt in the "),o("strong",[t._v("{Source}")]),t._v(" section to load a tabular dataset from your local machine")])]),t._v(" "),o("p",[o("strong",[t._v("Validating data without a schema")])]),t._v(" "),o("p",[t._v("In this section we will illustrate how to check tabular data for structural errors on "),o("a",{attrs:{href:"https://try.goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" where a data schema is not available. For this tutorial we will use a "),o("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/goodtables-py/bc6470a970aacf65f20a3ddb7f71eb05a2a31c70/data/invalid-on-structure.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample CSV file with errors"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Copy and paste the file’s URL to the "),o("strong",[t._v("{Source}")]),t._v(" input. When you click on the "),o("strong",[t._v("{Validate}")]),t._v(" button, "),o("a",{attrs:{href:"https://try.goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" presents an exhaustive list of structural errors in your dataset.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(315),alt:"Add dataset link in the Source field, or select the Upload file option"}}),o("br"),t._v(" "),o("em",[t._v("Figure 1: Add dataset link in the Source field, or select the Upload file option.")])]),t._v(" "),o("p",[t._v("If needed, you can disable two types of validation checks:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Ignore blank rows"),o("br"),t._v("\nUse this checkbox to indicate whether blank rows should be considered as errors, or simply ignored. Check this option if missing data is a known issue that cannot be fixed immediately i.e. if you are not the owner/publisher of the data.")])]),t._v(" "),o("li",[o("p",[t._v("Ignore duplicate rows"),o("br"),t._v("\nUse this checkbox to indicate whether duplicate rows should be considered as errors, or simply ignored.")])])]),t._v(" "),o("p",[t._v("We will leave all boxes unchecked for our example. On validate, we receive a list of 12 errors as we can see in figure 7 below.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(316),alt:"dataset errors outlined on try.goodtables.io"}}),o("br"),t._v(" "),o("em",[t._v("Figure 2: dataset errors outlined on "),o("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[o("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" points us to specific cells containing errors so they can be fixed easily. We can use this list as a guide to fix all errors in our data manually, and run a second validation test to confirm that all issues are resolved. If there no validations could be found, the ensuing message will be as in figure 8 below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(317),alt:"valid data message on goodtables.io"}}),o("br"),t._v(" "),o("em",[t._v("Figure 3: valid data message on "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables.io"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[t._v("Improving data quality is an iterative process that should involve data publishers and maintainers. Tools such as "),o("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" allow you to focus on complex errors like if the presented data is correct, instead of wasting time with simple (but very common) errors like incorrect date formats.")]),t._v(" "),o("p",[o("strong",[t._v("Validating tabular data with a schema")])]),t._v(" "),o("p",[t._v("A data schema contains information on the structure of your tabular data. Providing a data schema as part of the validation process on "),o("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" makes it possible to check your dataset for content errors. For example, a schema contains information on fields and their assigned data types, making it possible to highlight misplaced data i.e. text in an amounts column where numeric data is expected. If you haven’t yet, learn how to create a data schema for your data collection before continuing with this section.")]),t._v(" "),o("p",[t._v("To test how this works, you can use:")]),t._v(" "),o("ul",[o("li",[t._v("any of the data packages from "),o("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("this Data Package collection on GitHub"),o("OutboundLink")],1),t._v(", which comprises of example data packages curated by the Frictionless Data team  or")]),t._v(" "),o("li",[o("a",{attrs:{href:"http://datahub.io/core/",target:"_blank",rel:"noopener noreferrer"}},[t._v("any of the Core Data Packages on DataHub"),o("OutboundLink")],1),t._v(". The Core Data project provides essential data for data wranglers and data science community. Read more about it "),o("a",{attrs:{href:"https://datahub.io/docs/core-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[t._v("In any given Data Package, the "),o("em",[t._v("datapackage.json")]),t._v(" file contains the schema and the data folder contains tabular data to be validated against the schema.")]),t._v(" "),o("p",[t._v("Often, you will find that you may be working in workflows that involve many datasets, which are updated regularly. In cases such as this, one-time validation on "),o("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(" is probably not the answer. But fear not! Goodtables has the ability to automate the validation process so that errors are checked for continually.  Find out more in our continuous and "),o("a",{attrs:{href:"/blog/2018/03/12/automatically-validated-tabular-data"}},[t._v("automated data validation section")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"one-time-data-validation-with-goodtables-command-line-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-time-data-validation-with-goodtables-command-line-tool"}},[t._v("#")]),t._v(" One-time data validation with goodtables command line tool")]),t._v(" "),o("p",[t._v("The same validations that we’ve done on "),o("a",{attrs:{href:"http://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("try.goodtables.io"),o("OutboundLink")],1),t._v(", can also be done in your local machine using goodtables. This is especially useful for big datasets, or if your data is not publicly accessible online. However, this is a slightly technical task, which requires basic knowledge of the command line (CLI). If you don’t know how to use the CLI, or are a bit rusty, we recommend you to read the "),o("a",{attrs:{href:"https://tutorial.djangogirls.org/en/intro_to_command_line/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to the command-line tutorial"),o("OutboundLink")],1),t._v(" before proceeding.")]),t._v(" "),o("p",[t._v("For this section, you will need:")]),t._v(" "),o("ul",[o("li",[t._v("Python, a programming language which the goodtables command-line tool is written in - ["),o("a",{attrs:{href:"https://tutorial.djangogirls.org/en/python_installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),o("OutboundLink")],1),t._v("]")]),t._v(" "),o("li",[t._v("PIP, a tool that allows you to install packages written in Python. Installing Python automatically installs PIP, but in case not - [installation instructions]")]),t._v(" "),o("li",[t._v("Basic knowledge on how to use the command-line (see the "),o("a",{attrs:{href:"https://tutorial.djangogirls.org/en/intro_to_command_line/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to the command-line"),o("OutboundLink")],1),t._v(" if you want to brush up your skills)")])]),t._v(" "),o("p",[t._v("Once Python is set up, open your "),o("strong",[t._v("Terminal")]),t._v(" and install goodtables using the package manager, PIP. The command "),o("code",[t._v("pip install goodtables")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(318),alt:"installing goodtables command-line tool with pip in Terminal"}}),o("br"),t._v(" "),o("em",[t._v("Figure 4: installing goodtables command-line tool with pip in Terminal.")])]),t._v(" "),o("p",[t._v("To validate a data file, type goodtables followed by the path to your file i.e. "),o("code",[t._v("goodtables path/to/file.csv")]),t._v(". You can pass multiple file paths one after the other, or even the path to a "),o("em",[t._v("datapackage.json")]),t._v(" file.")]),t._v(" "),o("p",[t._v("For our first example, we will download and check "),o("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py/blob/master/data/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("this simple location CSV data file"),o("OutboundLink")],1),t._v(" for errors. In the second instance, we will validate this "),o("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/goodtables-py/bc6470a970aacf65f20a3ddb7f71eb05a2a31c70/data/invalid-on-structure.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("Department of Data Expenses dataset, that contains errors"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(319),alt:"Validating data files using goodtables in Terminal"}}),o("br"),t._v(" "),o("em",[t._v("Figure 5: Validating data files using goodtables in Terminal.")])]),t._v(" "),o("p",[t._v("You can see the list of options by running "),o("code",[t._v("goodtables --help")]),t._v(". The full documentation, including the list of validation checks that can be run, is available "),o("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("on the goodtables-py repository on GitHub"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Congratulations, you now know how to validate your tabular data using the command-line!")]),t._v(" "),o("p",[t._v("If you regularly update your data or maintain many different datasets, running the validations manually can be time-consuming. The solution is to automate this process, so the data is validated every time it changes, ensuring the errors are caught as soon as possible. Find out how to do it in the “"),o("a",{attrs:{href:"/blog/2018/03/12/automatically-validated-tabular-data"}},[t._v("Automating the validation checks")]),t._v("” section.")])])}),[],!1,null,null,null);e.default=r.exports}}]);