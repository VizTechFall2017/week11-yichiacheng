var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var marginLeft = 0;
var marginTop = 0;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var color = d3.scaleOrdinal(d3.schemeCategory20);

//import the data from the .csv file
d3.csv('./foodImports_AE.csv', function(dataIn){

    console.log(dataIn);

    //do your first drawing here

});

function buttonClicked(value){
    reloadData(value);
}


function reloadData(inputName){

        d3.csv('foodImports_' + inputName + '.csv', function(error, newData){
            console.log(newData);

            //call your update function from here!!
            //updateData(newData);
        });

}

//if you try to run the update code immediately after the reload code instead of inside it,
//it will try to run before the reload is complete.
//This will cause you problems:

//reloadData(inputName);
//updateData(newData);


