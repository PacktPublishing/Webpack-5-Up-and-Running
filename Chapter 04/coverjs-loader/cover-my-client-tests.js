require("./my-client-tests");

after(function() {
	require("cover-loader").reportHtml();
}); 