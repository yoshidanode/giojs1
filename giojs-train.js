
$(function () {

    //地球を表示させるエリアを取得する
    var container = document.getElementById( "globalArea" );

    //GIO.Controllerのインスタンスを作成する
    var controller = new GIO.Controller( container );

    controller.setInitCountry("JP");//最初にフォーカスされる国の選択
    controller.setStyle("magic");//地球モデルのデザインを設定

    //データを追加する
    //ランダムで１０カ国を選択し、日本とリンクするデータを作成
    var contry_code_list = Object.keys(conrty_code_list());
    var color_set = [//リンク用のカラーセット
        "#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF",
        "#FF00FF","#800080","#FF4500","#006400","#FFFACD"
    ]
    var data_set = [];
    var max = 10000000;
    var min = 1000000;
    for(var i = 0; i<10 ; i++){
        var random_contry = contry_code_list[
            Math.floor(Math.random() * contry_code_list.length)
        ];
        data_set.push({
            "e":"JP",
            "i":random_contry,
            //minからmaxまでの値をランダムに出力する
            "v":Math.floor(Math.random() * (max - min + 1) + min),
            "inColor": color_set[i],
            "outColor": color_set[i]
        });
    }

    //データをcontrollerにセット
    controller.addData( data_set );

    //controllerの初期化とレンダリング
    controller.init();
});
