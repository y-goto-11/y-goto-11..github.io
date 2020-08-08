const myfunc = function () {
  //選択されている性別の値の取得
  const sexList = document.form1.sex;

  for (let i = 0; i < sexList.length; i++) {
    if(sexList[i].checked){ //(sexList[i].checked === true)と同じ
      sex = sexList[i].value;
      break;
    }
  }

  //選択されている年齢の値の取得
  const age = document.form1.age.value;
  //選択されている体重の値の取得
  const weight = document.form1.weight.value;

  //取得した性別と年齢を基に、data.jsから基礎代謝基準値を取得
  for (let i = 0; i < jsonData.length; i ++) {
    if (sex == jsonData[i].sex && age == jsonData[i].age) {
      var basalMetabolismStandard = jsonData[i].basalMetabolismStandard;
      break;
    }
  }

  var basalMetabolism = Math.round(basalMetabolismStandard * weight);
  var usedCalories =  Math.round(basalMetabolism * 1.4);

  var str = `基礎代謝量は<span style='color: blue;'>${basalMetabolism}kcal</span>で、1日あたりの消費カロリーは約<span style='color: blue;'>${usedCalories}kcal</span>です`;

  document.getElementById('calcResult').innerHTML = str;
}
