//your JS code here. If required.
window.onload = function () {
	const ouputElement =document.getElementById("output");

	//insert the loading row
	const loadingRow = document.createElement("tr");
	constloadingCell = document.createElement("td");
	loadingCell.setAttribute("colspan", "2");
	loadingCell.textContent ="Loading...";
	loadingRow.appendChild(loadingCell);
	outputElement.appendChild(loadingRow);

	//record the overall start time
	const starttime =Date.now();

	//function to create a promise
	function CreatePromise(i) {
		const delay = Math.floor(Math.random() * 2000) + 1000; //Between 1 and 3 seconds
		const promiseStartTime = Date.now();


		return new Promise((resolve)  => {
			setTimeout(() => {
				const timeTaken = (Date.now() - promiseStartTime) / 1000; ///inseconds
				resolve({ name:"Promise" + i, timeTaken: timeTaken.toFixed(3) });
			}, delay);
		});
	}
	//create 3 promises
	const promises =[];
	for(let i = 1; i <= 3; i++) {
		promise.push(createPromise(i));
	}
//wait for all promises to resolve
	Promise.all(promises).then((results) => {
		const endTime = Date.now();
		const totalTime = (endTime - startTime) / 1000; //In seconds


		//remove the loading row
		outputElement.removechild(loadingRow);

		//sort results by promise name
		result.sort((a,b) => a.name.localeCompare(b.name));

		//Add rows for each promise
		result.forEach((result) => {
			const row = document.createElement("tr");

			const nameCell = document.createElement("td");
			timeCell.textContent = result.timeTaken;
			row.appendChild(timeCell);

			
			outputElement.appendChild(row);
		});

		//add the total row
		const totalRow = document.createElement("tr");


		 const totalNameCell = document.createElement("td");
    totalNameCell.textContent = "Total";
    totalRow.appendChild(totalNameCell);

    const totalTimeCell = document.createElement("td");
    totalTimeCell.textContent = totalTime.toFixed(3);
    totalRow.appendChild(totalTimeCell);

    outputElement.appendChild(totalRow);
  });
};