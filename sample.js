$(document).ready(function(){
  //1.これは画像などを除いて、HTML=DOMの読み込みが終わったらfunction()の中の処理を実行するという意味
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          //4.id値がnational_languageのvalue値を取得する。
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          //5.Number()は文字列を数値に変換する役割をもつ。
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
    //6．id値＝sum_indicateが保持しているテキスト情報を取得している。

      // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = sum / subject_points.length;

    $("#average_indicate").text(average);

    return average
  };

   function get_achievement(average){
      // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
      if (average >= 80) {
      return "A";
  } else if (average >= 60) {
    return  "B";
  }
    else if(average >= 40) {
    return "C";
    }
    else {
    return "D";
    }
  };

  let subject_points = [Number($('#national_language').val()),
                        //4.id値がnational_languageのvalue値を取得する。
                        Number($('#english').val()),
                        Number($('#mathematics').val()),
                        Number($('#science').val()),
                        Number($('#society').val())
                        //5.Number()は文字列を数値に変換する役割をもつ。
                        ];

    let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        $("#sum_indicate").text(sum);



  function get_pass_or_failure(subject_points){
    let number = subject_points.length;
    let judge = "合格";
    for(let i=0; i<number; i++){
      if (subject_points[i] < 60){
        judge = "不合格";
        break;
      }
    }
    return judge;
};

  function judgement(){
    let subject_points = [Number($('#national_language').val()),
                          //4.id値がnational_languageのvalue値を取得する。
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          //5.Number()は文字列を数値に変換する役割をもつ。
                          ];
    let average = score_indicate()
    let rank = get_achievement(average);
    let pass_or_failure = get_pass_or_failure(subject_points);

  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${rank}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    //3.idセレクタで上記５科目の科目の要素の数値が変更された(イベント)後にscore_indicate();が実行される。
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    let average = score_indicate()
    let rank = get_achievement(average)
   // console.log(get_achievement)
    $("#evaluation").text(rank);
    //2.idセレクタでbtn-evaluationを取得した。その要素をクリック(イベント)後にget_achievement();が実行される。
  });


  $('#btn-judge').click(function() {
    let subject_points = [Number($('#national_language').val()),
                          //4.id値がnational_languageのvalue値を取得する。
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          //5.Number()は文字列を数値に変換する役割をもつ。
                          ];
    let result = get_pass_or_failure(subject_points)
    $("#judge").text(result);
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
