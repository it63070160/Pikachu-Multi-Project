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

function scrollDown() {
    scrollCount += 25;
    if (window.pageYOffset < document.getElementById('hero').clientHeight) {
        window.scrollTo(0, scrollCount);
        window.requestAnimationFrame(function() {
            scrollDown();
        });
    } else {}
};

window.onscroll = function() {
    if (window.pageYOffset > 500) {
        document.getElementById('col-left').classList.add('fade-in-left')
        window.setTimeout(function() {
            document.getElementById('col-right').classList.add('fade-in-bottom')
        }, 500)
    }
}

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
    document.getElementById("calculated-fund").innerHTML = 'ต้นทุน: ~' + fund + unit_fund;
    document.getElementById("calculated-save").innerHTML = 'ประหยัด: ~' + save + unit_save;
}