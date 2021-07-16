let dataDummy = [
	{
		nama: "jansen",
		Umur: 35,
		alamat: "medan",
	},
	{
		nama: 'Alfa',
		Umur: 31,
		alamat: 'jakarta',
	},
	{
		nama: 'joko',
		Umur: 10,
		alamat: 'solo',
	},
	{
		nama: 'eko cahyonto',
		Umur: 20,
		alamat: 'NTB',
	},
	{
		nama: 'Stanlie',
		Umur: 13,
		alamat: 'Jatim',
	},
	{
		nama :'Fian',
		Umur: 24,
		alamat: 'malang',
	},
	{
		nama: 'harry rosadi',
		Umur: 31,
		alamat: 'Papua',
	},

	{
		nama: 'Dimas',
		Umur: 23,
		alamat: 'Bandung',
	},
	{
		nama: 'Sefrinaldi',
		Umur: 30,
		alamat: 'Padang',
	},
	{
		nama: 'jansen rosadi',
		Umur: 74,
		alamat: 'unknown',
	},
	{
		nama: 'Adzka',
        Umur: 30,
		alamat: 'Yogyakarta',
	},
	{
		nama: 'Muhammad wawan',
		Umur: 55,
		alamat: 'Galaxy',
	},
	{
		nama: 'aulia',
		Umur: 19,
		alamat: 'medan',
	},
	{
		nama: 'janson',
        Umur: 21,
		alamat: 'palembang',
	},
	{
		nama: 'Lathief',
		Umur: 30,
		alamat: 'padang',
	},
];
var nomer = dataDummy.length;
function clear() {
	$("#nomer").val("");
	$("#nama").val("");
	$("#alamat").val("");
}

function addRow() {
	var table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);

	newRow.setAttribute("id", "row1");

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);

	// var nomerBaru = cell1.innerHTML = nomer+1;
	// nomer = nomerBaru;
	cell2.innerHTML = `<input type="text" id="namaBaru">`;
	cell3.innerHTML = `<input type="text" id="umur">`;
	cell4.innerHTML = `<input type="text" id="alamatBaru">`
}

function saveRow() {
	var nama = $("#namaBaru").val();
	var umur = $("#umur").val();
	var alamat = $("#alamatBaru").val();

	if (
		nama === "" ||
		(alamat === "" && nama === undefined) ||
		alamat === undefined
	) {
		// alert("masukkan nama dan alamat!!!");
		alert("Please Fill the Inputs");
	} else {
		var table = document.getElementsByTagName("table")[0];
		var newRow = table.insertRow(table.rows.length);

		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var cell4 = newRow.insertCell(3);

		var nomerBaru = (cell1.innerHTML = nomer + 1);
		nomer = nomerBaru;
		cell2.innerHTML = nama;
		cell3.innerHTML = umur;
		cell4.innerHTML = alamat;
		dataDummy.push({
			nama: nama,
			Umur: umur,
			alamat: alamat,
		})
		console.log(dataDummy);
		$("#row1").remove();

		// $('#namaBaru').remove();
		// $('#alamatBaru').remove();
		// swal("Added", "Success!", "success");
	}
}

function reset() {
	$("#row1").remove();
}

var state = {
	querySet: dataDummy,
	'page': 1,
	'rows': 4,
	'window': 4,
};
buildTable();

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
  
    var trimmedData = querySet.slice(trimStart, trimEnd)
  
    var pages = Math.round(querySet.length / rows);
  
    return {
      'querySet': trimmedData,
      'pages': pages,
    }
  }
  function pageButtons(pages) {
	var wrapper = document.getElementById('pagination-wrapper')
  
	wrapper.innerHTML = ``
	console.log('Pages:', pages)
  
	var maxLeft = (state.page - Math.floor(state.window / 2))
	var maxRight = (state.page + Math.floor(state.window / 2))
  
	if (maxLeft < 1) {
	  maxLeft = 1
	  maxRight = state.window
	}
  
	if (maxRight > pages) {
	  maxLeft = pages - (state.window - 1)
  
	  if (maxLeft < 1) {
		maxLeft = 1
	  }
	  maxRight = pages
	}
  
  
  
	for (var page = maxLeft; page <= maxRight; page++) {
	  wrapper.innerHTML += `<button value=${page} class="page btna btn-sm btn-info">${page}</button>`
	}
  
	if (state.page != 1) {
	  wrapper.innerHTML = `<button value=${1} class="page btna btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
	}
  
	if (state.page != pages) {
	  wrapper.innerHTML += `<button value=${pages} class="page btna btn-sm btn-info">Last &#187;</button>`
	}
  
	$('.page').on('click', function() {
	  $('#table-body').empty()
  
	  state.page = Number($(this).val())
  
	  buildTable()
	})
  
  }
  
function buildTable() {
    var table = $('#table-body')
  
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
    var nomor = 1;
    for (var i = 1 in myList) {
      var row = `<tr>
                    <td>${nomor}</td>
                    <td>${myList[i].nama}</td>
                    <td>${myList[i].Umur}</td>
                    <td>${myList[i].alamat}</td>
                    `
      table.append(row)
      nomor++;
    }
  
    pageButtons(data.pages)
  }
  function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("our-table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            // td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }