$(document).ready(() => {
    let color = d3.scale.linear()
        .domain([0,1,2,3,4,5,6,10,15,20,100])
        .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

    function draw(words) {
        d3.select("body").append("svg")
            .attr("class", "wordcloud")
            .append("g")
            .attr("transform", "translate(320,200)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d, i) { return color(i); })
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }

    function wordCloud(array){
        let layout = d3.layout.cloud().size([800, 300])
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
        layout.words(array).start();
    }

    let xhr = new XMLHttpRequest();

    let xhrPromise = new Promise((resolve, reject) => {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                resolve(xhr.responseText);
            }
        }
        xhr.open('GET', 'http://localhost:8080/api/speech89', true);
        xhr.send(null);
    }).then(result => {
        wordCloud(JSON.parse(result))
    })
})