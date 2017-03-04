// 棒グラフのデータ（データセット）
var dataSet = [300, 130, 5, 60, 240];
// データにもとづいて描画する
d3.select("#myGraph")	// SVG要素を指定
	.selectAll("rect")	// SVGでの四角形を示す要素を指定
	.data(dataSet)	// データを設定
	.enter()	// データの数に応じてrect要素を生成
	.append("rect")	// SVGの四角形を生成
	.attr("x", 0)	// 横棒グラフなのでX座標を0にする
	.attr("y", function(d,i){	// Y座標を配列の順序に応じて計算
		return i * 25;	// 棒グラフのY座標を25px単位で計算
	})
	.attr("height", "20px")	// 棒グラフの高さを20pxで指定
	.attr("width", function(d, i){	// 棒グラフの横幅を配列の内容に応じて計算
		return d +"px";	// データの値をそのまま横幅とする
	})
	.on("click", function(){
		d3.select(this)	// クリックされた要素を指定
			.style("fill", "cyan")	// 塗りのスタイルを水色にする
	})
