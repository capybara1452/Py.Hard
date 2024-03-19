(function(document) {
    'use strict';

    // 建立 LightTableFilter
    var LightTableFilter = (function(Arr) {
  
      var _input, _input2;
  
      // 資料輸入事件處理函數
      function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, _filter);
          });
        });
      }
      

        // // 資料篩選函數，顯示包含關鍵字的列，其餘隱藏
        // function _filter(row) {
        //   var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        //   row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        // }

        // console.log(sel1);
        // console.log(sel2);


  


        // 資料篩選函數，顯示包含關鍵字的列，其餘隱藏
        function _filter(row) {

          var text = row.textContent.toLowerCase(),
              sel1 = document.getElementById("【屬性】").value.toLowerCase(),
              sel2 = document.getElementById("【睡眠類型】").value.toLowerCase(),
              sel3 = document.getElementById("【出沒島嶼】").value.toLowerCase(),
              sel4 = document.getElementById("【專長】").value.toLowerCase(),
              sel5 = document.getElementById("【樹果】").value.toLowerCase(),
              sel6 = document.getElementById("【食材】").value.toLowerCase(),
              sel7 = document.getElementById("【主技能】").value.toLowerCase();
        

          let x = 1
          while (x <= 3) {    
                        
            if (sel1 !== "【屬性】"){if (text.indexOf(sel1) === -1){row.style.display = 'none'
            break}}
            if (sel2 !== "【睡眠類型】"){if (text.indexOf(sel2) === -1){row.style.display = 'none'
            break}}
            if (sel3 !== "【出沒島嶼】"){if (text.indexOf(sel3) === -1){row.style.display = 'none'
            break}}
            if (sel4 !== "【專長】"){if (text.indexOf(sel4) === -1){row.style.display = 'none'
            break}}
            if (sel5 !== "【樹果】"){if (text.indexOf(sel5) === -1){row.style.display = 'none'
            break}}
            if (sel6 !== "【食材】"){if (text.indexOf(sel6) === -1){row.style.display = 'none'
            break}}
            if (sel7 !== "【主技能】"){if (text.indexOf(sel7) === -1){row.style.display = 'none'
            break}}

            row.style.display = 'table-row'
            break
            x++
          }

        }


  
      return {
        // 初始化函數
        init: function() {
          var inputs = document.getElementsByClassName('light-table-filter');
          Arr.forEach.call(inputs, function(input) {
            input.oninput = _onInputEvent;
          });
        }
      };
    })(Array.prototype);
  
    // 網頁載入完成後，啟動 LightTableFilter
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        LightTableFilter.init();
      }
    });
  
  })(document);



  
function ShowMeDate() {
  　var Today=new Date();
  　alert("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
  }

