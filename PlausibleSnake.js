#!/usr/bin/env node

// To launch this script from CLI (under OSX) with node, intall and or upgrade node with homebrewer
// make this script executable: chmod u+x PlausibleSnake.js
// launch it: ./PlausibleSnake.js

function is_valid(snake, n) {
	var test = true;
	for(var i=0; i<n-1; i++){
		if(snake[i]==1 && snake[i+1]==1) {
			test=0;
		}
	}
	return test;
}

function search() {
	// number of cubelets = 3^3-2
	var nbCubelet = 25;
	// all cubelets (E excepted) C=0 S=1; must be equal to nbCubelet
	var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25;
	// candidate snake and associated variables
	var snake = new Int32Array(nbCubelet),
		valid = new Int32Array(nbCubelet);
	// total nb of snakes and nb of snakes with no 2 consecutive straights (objective)
	var nb_snake,
		nb_plausible;

	var start = new Date().getTime();

	nb_snake=0;
	nb_plausible=0;
	for(var i=0; i<nbCubelet; i++) { valid[i]=0; }
	for(var i=0; i<nbCubelet; i++) { snake[i]=0; }

	for(var c1=0; c1<=1; c1++){snake[0]=c1; valid[0]=1;
	for(var c2=0; c2<2; c2++){snake[1]=c2; valid[1]=is_valid(snake,2); if(valid[1]==1) {
	for(var c3=0; c3<2; c3++){snake[2]=c3; valid[2]=is_valid(snake,3); if(valid[2]==1) {
	for(var c4=0; c4<2; c4++){snake[3]=c4; valid[3]=is_valid(snake,4); if(valid[3]==1) {
	for(var c5=0; c5<2; c5++){snake[4]=c5; valid[4]=is_valid(snake,5); if(valid[4]==1) {
	for(var c6=0; c6<2; c6++){snake[5]=c6; valid[5]=is_valid(snake,6); if(valid[5]==1) {
	for(var c7=0; c7<2; c7++){snake[6]=c7; valid[6]=is_valid(snake,7); if(valid[6]==1) {
	for(var c8=0; c8<2; c8++){snake[7]=c8; valid[7]=is_valid(snake,8); if(valid[7]==1) {
	for(var c9=0; c9<2; c9++){snake[8]=c9; valid[8]=is_valid(snake,9); if(valid[8]==1) {
	for(var c10=0; c10<2; c10++){snake[9]=c10; valid[9]=is_valid(snake,10); if(valid[9]==1) {
	for(var c11=0; c11<2; c11++){snake[10]=c11; valid[10]=is_valid(snake,11); if(valid[10]==1) {
	for(var c12=0; c12<2; c12++){snake[11]=c12; valid[11]=is_valid(snake,12); if(valid[11]==1) {
	for(var c13=0; c13<2; c13++){snake[12]=c13; valid[12]=is_valid(snake,13); if(valid[12]==1) {
	for(var c14=0; c14<2; c14++){snake[13]=c14; valid[13]=is_valid(snake,14); if(valid[13]==1) {
	for(var c15=0; c15<2; c15++){snake[14]=c15; valid[14]=is_valid(snake,15); if(valid[14]==1) {
	for(var c16=0; c16<2; c16++){snake[15]=c16; valid[15]=is_valid(snake,16); if(valid[15]==1) {
	for(var c17=0; c17<2; c17++){snake[16]=c17; valid[16]=is_valid(snake,17); if(valid[16]==1) {
	for(var c18=0; c18<2; c18++){snake[17]=c18; valid[17]=is_valid(snake,18); if(valid[17]==1) {
	for(var c19=0; c19<2; c19++){snake[18]=c19; valid[18]=is_valid(snake,19); if(valid[18]==1) {
	for(var c20=0; c20<2; c20++){snake[19]=c20; valid[19]=is_valid(snake,20); if(valid[19]==1) {
	for(var c21=0; c21<2; c21++){snake[20]=c21; valid[20]=is_valid(snake,21); if(valid[20]==1) {
	for(var c22=0; c22<2; c22++){snake[21]=c22; valid[21]=is_valid(snake,22); if(valid[21]==1) {
	for(var c23=0; c23<2; c23++){snake[22]=c23; valid[22]=is_valid(snake,23); if(valid[22]==1) {
	for(var c24=0; c24<2; c24++){snake[23]=c24; valid[23]=is_valid(snake,24); if(valid[23]==1) {
	for(var c25=0; c25<2; c25++){snake[24]=c25; valid[24]=is_valid(snake,25); if(valid[24]==1) {
		nb_plausible++;
		if(nb_plausible%10000==0){
			// console.log('nb_plausible = ' + nb_plausible);
			process.stdout.write('snake['+String(nb_plausible)+'] = ');
			for(var k=0; k<25; k++) {
				process.stdout.write(String(snake[k]));
			}
			process.stdout.write('\n');
		}
	}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

	console.log('The number of plausible snakes (i.e. with no 2 consecutive straights) is = ', nb_plausible/2);

	var end = new Date().getTime();
	var time = end - start;
	console.log('Run time = ' + time + ' milliseconds');

	return nb_plausible;
}


search()

/*output
The number of plausible snakes (i.e. with no 2 consecutive straights) is =  98209
Run time = 147 milliseconds*/

