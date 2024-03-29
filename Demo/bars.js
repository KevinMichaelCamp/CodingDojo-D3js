var bars =  d3.select("#chart")
            .selectAll("div")
            .data([4, 8, 15, 16, 20, 12]);

bars.enter().append("div")
  .text(function(d) { return d; })
  .style("height", function(d) { return d*20+"px"; });


function randomsGenerator(){
  var nums = [];
  var size = Math.floor(Math.random()*10+1);

  for(var i = 0; i < size; i++){
    nums.push(Math.floor(Math.random()*20+1));
  }
  buildChart(nums);
}

function buildChart(newdata){
  var bars =  d3.select("#chart")
              .selectAll("div")
              .data(newdata)
              .text(function(d) { return d; })
              .style("height", function(d) { return d*20+"px"; });
  bars.enter().append("div")
              .attr("class", "bar")
              .text(function(d) { return d; })
              .style("height", function (d) { return d*20+"px"; })
              .style("background-color", "purple");
  bars.exit().remove();

}