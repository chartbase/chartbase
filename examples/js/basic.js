var ex1 = chartbase("#ex1");

ex1
	.use("core/margin", 30)
	.use("core/resize", {
		w: 500
	})
	.use("core/data", "data/example-1.csv")
	.use("core/scales", "x", "y")
	.use("core/axes", "x", "y")
	.use("core/line", {
        interpolate: "basis"    		
	});

console.log(ex1);