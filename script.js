var scrollCount = 0;
document.getElementById('scroll-icon').addEventListener('click', function() {
    window.requestAnimationFrame(function() {
        scrollCount = window.pageYOffset;
        scrollDown()
    });
});
// document.getElementById('scroll-button').addEventListener('click', function() {
//     window.requestAnimationFrame(function() {
//         scrollCount = window.pageYOffset;
//         scrollDown()
//     });
// });

function bright(){
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0]; 
  
    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element 
    link.rel = 'stylesheet';   
    link.href = 'style.css';
    // Append link element to HTML head
    head.appendChild(link);
}
function dark(){
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0]; 
  
    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element 
    link.rel = 'stylesheet';
    link.href = 'style_dark.css';
    // Append link element to HTML head
    head.appendChild(link); 
}

function scrollDown() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('hero').clientHeight) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown();
        });
    } else {}
};

function page1_scroll(){
    document.getElementById('p1').classList.add('selected-page')
    document.getElementById('p2').classList.remove('selected-page')
    document.getElementById('p3').classList.remove('selected-page')
    document.getElementById('p4').classList.remove('selected-page')
    document.getElementById('p5').classList.remove('selected-page')
    document.getElementById('p6').classList.remove('selected-page')
}
function page2_scroll(){
    document.getElementById('p2').classList.add('selected-page')
    document.getElementById('p1').classList.remove('selected-page')
    document.getElementById('p3').classList.remove('selected-page')
    document.getElementById('p4').classList.remove('selected-page')
    document.getElementById('p5').classList.remove('selected-page')
    document.getElementById('p6').classList.remove('selected-page')
}
function page3_scroll(){
    document.getElementById('p3').classList.add('selected-page')
    document.getElementById('p1').classList.remove('selected-page')
    document.getElementById('p2').classList.remove('selected-page')
    document.getElementById('p4').classList.remove('selected-page')
    document.getElementById('p5').classList.remove('selected-page')
    document.getElementById('p6').classList.remove('selected-page')
}
function page4_scroll(){
    document.getElementById('p4').classList.add('selected-page')
    document.getElementById('p1').classList.remove('selected-page')
    document.getElementById('p2').classList.remove('selected-page')
    document.getElementById('p3').classList.remove('selected-page')
    document.getElementById('p5').classList.remove('selected-page')
    document.getElementById('p6').classList.remove('selected-page')
}
function page5_scroll(){
    document.getElementById('p5').classList.add('selected-page')
    document.getElementById('p1').classList.remove('selected-page')
    document.getElementById('p2').classList.remove('selected-page')
    document.getElementById('p3').classList.remove('selected-page')
    document.getElementById('p4').classList.remove('selected-page')
    document.getElementById('p6').classList.remove('selected-page')
}
function page6_scroll(){
    document.getElementById('p6').classList.add('selected-page')
    document.getElementById('p1').classList.remove('selected-page')
    document.getElementById('p2').classList.remove('selected-page')
    document.getElementById('p3').classList.remove('selected-page')
    document.getElementById('p4').classList.remove('selected-page')
    document.getElementById('p5').classList.remove('selected-page')
}

window.onscroll = function() {
    if(document.body.scrollHeight > 5500){
        if (window.pageYOffset >= 0 && window.pageYOffset < 500) {
            page1_scroll();
        }
        else if (window.pageYOffset > 680 && window.pageYOffset < 1130) {
            page2_scroll();
            document.getElementById('col-left').classList.add('fade-in-left')
            window.setTimeout(function() {
                document.getElementById('calculator').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 1822 && window.pageYOffset < 2176) {
            page3_scroll();
            document.getElementById('col-right').classList.add('fade-in-right')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 2876 && window.pageYOffset < 3560) {
            page4_scroll();
            document.getElementById('col-right2').classList.add('fade-in-bottom')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 3569 && window.pageYOffset < 4260) {
            page5_scroll();
            document.getElementById('col-right3').classList.add('fade-in-top')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 4269 && window.pageYOffset < 4400) {
            page6_scroll();
            document.getElementById('col-right4').classList.add('fade-in-top')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
    }
    else if(document.body.scrollHeight < 5500){
        if (window.pageYOffset >= 0 && window.pageYOffset < 500) {
            page1_scroll();
        }
        else if (window.pageYOffset > 500 && window.pageYOffset < 1110) {
            page2_scroll();
            document.getElementById('col-left').classList.add('fade-in-left')
            window.setTimeout(function() {
                document.getElementById('calculator').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 1320 && window.pageYOffset < 2165) {
            page3_scroll();
            document.getElementById('col-right').classList.add('fade-in-right')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 2376 && window.pageYOffset < 2587) {
            page4_scroll();
            document.getElementById('col-right2').classList.add('fade-in-bottom')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 2798 && window.pageYOffset < 3115) {
            page5_scroll();
            document.getElementById('col-right3').classList.add('fade-in-top')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
        else if (window.pageYOffset > 3500 && window.pageYOffset < 3831) {
            page6_scroll();
            document.getElementById('col-right4').classList.add('fade-in-top')
            window.setTimeout(function() {
                document.getElementById('col-left-overlay').classList.add('fade-in-bottom')
            }, 500)
        }
    }
}

function page1(){
    window.pageYOffset = 1;
}
function page2(){
    if(document.body.scrollHeight > 5500){
        window.pageYOffset = 681;
    }
    else if(document.body.scrollHeight < 5500){
        window.pageYOffset = 501;
    }
}
function page3(){
    if(document.body.scrollHeight > 5500){
        window.pageYOffset = 1823;
    }
    else if(document.body.scrollHeight < 5500){
        window.pageYOffset = 1321;
    }
}
function page4(){
    if(document.body.scrollHeight > 5500){
        window.pageYOffset = 2877;
    }
    else if(document.body.scrollHeight < 5500){
        window.pageYOffset = 2377;
    }
}
function page5(){
    if(document.body.scrollHeight > 5500){
        window.pageYOffset = 3570;
    }
    else if(document.body.scrollHeight < 5500){
        window.pageYOffset = 2799;
    }
}
function page6(){
    if(document.body.scrollHeight > 5500){
        window.pageYOffset = 4270;
    }
    else if(document.body.scrollHeight < 5500){
        window.pageYOffset = 3501;
    }
}

// Calculator
document.getElementById("size").disabled = true;
function select(){
    var selected = document.getElementById("selector-cal").value;
    var choose = 0;
    if(selected=="house"){
        choose = 0;
    }
    else if(selected=="hospital-large"){
        choose = 1;
    }
    else if(selected=="hospital-district"){
        choose = 2;
    }
    else if(selected=="hospital-healthy"){
        choose = 3;
    }
    else if(selected=="school-verylarge"){
        choose = 4;
    }
    else if(selected=="school-large"){
        choose = 5;
    }
    else if(selected=="school-medium"){
        choose = 6;
    }
    else if(selected=="school-small"){
        choose = 7;
    }
    return choose;
}
function sizechange(){
    var amount = document.getElementById("amount").value;
    num_amount =  parseInt(amount);
    choose = select();
    if(choose == 0){
        document.getElementById("size").value = 1.5*num_amount;
    }
    else if(choose == 1){
        document.getElementById("size").value = 1000*num_amount;
    }
    else if(choose == 2 || choose == 4 || choose == 5){
        document.getElementById("size").value = 100*num_amount;
    }
    else if(choose == 3 || choose == 7){
        document.getElementById("size").value = 5*num_amount;
    }
    else if(choose == 6){
        document.getElementById("size").value = 30*num_amount;
    }
    
}
function calculate(){
    var size = document.getElementById("size").value;
    var amount = document.getElementById("amount").value;
    choose = select();
    num_size =  parseFloat(size);
    num_amount =  parseInt(amount);
    if(choose == 0){
        var fund = 60000*num_amount;
        var save = 10403*num_amount;
    }
    else if(choose == 1){
        var fund = 30000000*num_amount;
        var save = 6935000*num_amount;
    }
    else if(choose == 2){
        var fund = 3000000*num_amount;
        var save = 693500*num_amount;
    }
    else if(choose == 3){
        var fund = 200000*num_amount;
        var save = 34675*num_amount;
    }
    else if(choose == 4){
        var fund = 3000000*num_amount;
        var save = 693500*num_amount;
    }
    else if(choose == 5){
        var fund = 3000000*num_amount;
        var save = 693500*num_amount;
    }
    else if(choose == 6){
        var fund = 900023.20*num_amount;
        var save = 208050*num_amount;
    }
    else if(choose == 7){
        var fund = 200221*num_amount;
        var save = 34675*num_amount;
    }
    if (save>999999){
        save /= 1000000;
        var unit_save = ' ล้านบาท/ปี';
    }
    else{
        var unit_save = ' บาท/ปี';
    }
    if (fund>999999){
        fund /= 1000000;
        var unit_fund = ' ล้านบาท';
    }
    else{
        var unit_fund = ' บาท';
    }
    document.getElementById("calculated-fund").innerHTML = 'ต้นทุน: ' + fund + unit_fund;
    document.getElementById("calculated-save").innerHTML = 'ประหยัด: ' + save + unit_save;
}
// -- //
