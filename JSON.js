let pageConfig = {
	showData: 4,
	currentPage: 1,
	buttonPerPage: 4,
};
let usersFix = [];
let dataUserOld = [];
let albumData = [];
let photoAll = [];
let filteredUsers = [];
let updateStatus = false;
const panjangDatalama = usersFix.length;
console.log("panjang Data lama:", panjangDatalama);

const getUsers = () => {
	// promise
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((json) => {
			dataUserOld = json.map((user) => {
				return {
					userId: user.id,
					name: user.name,
				};
			});
		});
	fetch("https://jsonplaceholder.typicode.com/albums")
		.then((response) => response.json())
		.then((json) => {
			albumData = json.map((albums) => {
				return {
					albumId: albums.id,
					albumName: albums.title,
					userId: albums.userId,
				};
			});
		});
	fetch("https://jsonplaceholder.typicode.com/photos")
		.then((response) => response.json())
		.then((json) => {
			photoAll = json.map((photos) => {
				return {
					albumId: photos.albumId,
					title: photos.title,
					urlPhoto: photos.url,
					thumbnailUrl: photos.thumbnailUrl,
				};
			});
		})
		.then(filterNewData)
		.then(generateTable);
};

const filterNewData = () => {
	for (let i = 0; i < photoAll.length - 4000; i++) {
		const photoData_ith = photoAll[i];
		const albumNameById = albumData.filter(function (currentElement) {
			return currentElement.albumId === photoData_ith.albumId;
		});
		const userNameById = dataUserOld.filter(function (currentElement) {
			return currentElement.userId === albumNameById[0].userId;
		});
		usersFix.push({
			photoName: photoData_ith.title,
			albumName: albumNameById[0].albumName,
			nama: userNameById[0].name,
			url: photoData_ith.urlPhoto,
			thumbnail: photoData_ith.thumbnailUrl,
		});
		console.log(usersFix.url);
	}
	generateTable(usersFix);
};

// Promise
const fetchKW = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("data");
	}, 5000);
});

console.log("diatas then");
fetchKW
	.then((resp) => {
		console.log("run after 5 seconds!!", resp);
	})
	.catch(() => {
		console.log("error detected");
	})
	.finally(() => console.log("akhirnyaaaaa...."));
console.log("dibawah then");
const generateTable = (data = usersFix) => {
	console.log(usersFix);
	let tbody = document.querySelector("table > tbody");
	let tr = document.querySelectorAll("table > tr");
	let rows = "";
	let i = 0;
	let startIndex = (pageConfig.currentPage - 1) * pageConfig.showData;
	let endIndex = startIndex + pageConfig.showData;
	// halaman 1 = 0 => 0 * 2 = 0
	// halaman 2 = 2  => 1 * 2 = 2
	// halaman 3 = 4  => 2 * 2 = 4

	for (
		let index = startIndex;
		index < endIndex && index < data.length;
		index++
	) {
		const user = data[index];

		rows += `
            <tr>
                <td class="idData">${index + 1}</td>
                <td class="cell-nama">${user.photoName}</td>
                <td class="cell-umur">${user.albumName}</td>
                <td class="cell-alamat">${user.nama}</td>
				<td class="Cruds"> <img class="myImg" src="${
					user.thumbnail
				}" onClick="imgPop('${user.url}')"></a></td>
            </tr>
        `;
	}
	tbody.innerHTML = rows;
	generatePagination(data);
};

const generatePagination = (data) => {
	const pagination = document.querySelector("div.pagination");
	let panjangDataBaru = usersFix.length;
	console.log("Panjang Data Baru:", panjangDataBaru);
	let buttonPage = "";
	let pageAwal = 1;
	let pageAkhir = pageConfig.buttonPerPage;
	const totalPage = Math.ceil(data.length / pageConfig.showData);
	const batas = Math.floor(pageConfig.buttonPerPage / 2);

	if (data.length < usersFix.length) {
		if (data == "") {
			buttonPage = `<span class="btn btn btn-info" onClick=__init();
			>Data Not Found</span>`;
		} else {
			if (pageConfig.currentPage != 1)
				buttonPage += `<span class="page prev btn btn btn-info">Prev</span>`;

			for (let page = 1; page <= totalPage; page++) {
				let className = "page";
				if (pageConfig.currentPage == page) className = "page active";

				buttonPage += `<span class="${className} btn btn-primary">${page}</span>`;
			}
			if (pageConfig.currentPage != totalPage)
				buttonPage += `<span class="page next btn btn btn-info">Next</span>`;
		}

		pagination.innerHTML = buttonPage;
		mapEvent();
		// } else if (users.length != panjangData) {
	} else if (panjangDataBaru == 0) {
		console.log("Test Data");
		buttonPage = `<span class="btn btn btn-info" onClick= location.reload();
			>All Data Deleted Refresh The page </span>`;
		// let buttonNew = pageConfig.buttonPerPage - 2;
		// console.log(buttonNew);
		// const batasbaru = Math.floor(buttonNew / 2);
		// if (pageConfig.currentPage - batasbaru > 0) {
		// 	if (pageConfig.currentPage + batasbaru >= totalPage) {
		// 		pageAwal = totalPage - buttonNew + 1;
		// 		pageAkhir = totalPage;
		// 	} else {
		// 		pageAwal = pageConfig.currentPage - batasbaru + 1;
		// 		pageAkhir = pageConfig.currentPage + batasbaru + 1;
		// 	}
		// }
		// if (pageConfig.currentPage != 1)
		// 	buttonPage += `<span class="page prev btn btn btn-info">Prev</span>`;

		// for (let page = pageAwal; page <= pageAkhir; page++) {
		// 	let className = "page";
		// 	if (pageConfig.currentPage == page) className = "page active";

		// 	buttonPage += `<span class="${className} btn btn-primary">${page}</span>`;
		// }

		// if (pageConfig.currentPage != totalPage)
		// 	buttonPage += `<span class="page next btn btn btn-info">Next</span>`;

		pagination.innerHTML = buttonPage;
		mapEvent();
	} else {
		if (pageConfig.currentPage - batas > 0) {
			if (pageConfig.currentPage + batas >= totalPage) {
				pageAwal = totalPage - pageConfig.buttonPerPage + 1;
				pageAkhir = totalPage;
			} else {
				pageAwal = pageConfig.currentPage - batas + 1;
				pageAkhir = pageConfig.currentPage + batas + 1;
			}
		}
		if (pageConfig.currentPage != 1)
			buttonPage += `<span class="page prev btn btn btn-info">Prev</span>`;

		for (let page = pageAwal; page <= pageAkhir; page++) {
			let className = "page";
			if (pageConfig.currentPage == page) className = "page active";

			buttonPage += `<span class="${className} btn btn-primary">${page}</span>`;
		}

		if (pageConfig.currentPage != totalPage)
			buttonPage += `<span class="page next btn btn btn-info">Next</span>`;

		pagination.innerHTML = buttonPage;
		mapEvent();
	}
};

const goToPage = (e) => {
	const search = document.querySelector('input[name="search"]');

	if (e.classList.contains("prev")) pageConfig.currentPage--;
	else if (e.classList.contains("next")) pageConfig.currentPage++;
	else pageConfig.currentPage = e.innerText;

	if (search.value != "") generateTable(filteredUsers);
	else generateTable();
};

const mapEvent = () => {
	document.querySelectorAll("span.page").forEach((el) => {
		el.addEventListener("click", () => goToPage(el));
	});
};

const mapEventAddNew = () => {
	document.querySelector("table").addEventListener("keyup", (e) => {
		if (e.key === "Enter") saveData();
	});
};

const filterRow = (e) => {
	// filteredUsers = []
	// for (let index = 0; index < users.length; index++) {
	//     const user = users[index];

	//     if (user.name.toLocaleLowerCase().includes(e.value.toLocaleLowerCase()))
	//         filteredUsers.push(user)
	// }
	// generateTable(filteredUsers)

	// filter (array method) usage
	// filteredUsers = users.filter(user => user.name.toLocaleLowerCase().includes(e.value.toLocaleLowerCase()))
	// atau
	filteredUsers = usersFix.filter((user) => {
		return user.nama.toLocaleLowerCase().includes(e.value.toLocaleLowerCase());
	});
	generateTable(filteredUsers);
};

const addRow = () => {
	const tbody = document.querySelector("table > tbody");
	const input = document.querySelector("input");

	if (updateStatus)
		return alert("Form harus di Isi sebelum membuat Form baru lagi");

	const newRow = `
            <tr>
            <td align="center">${usersFix.length + 1}</td>
            <td>
                <input type="text" name="name" />
            </td>
            <td>
				<input type="text" name="umur" />
            </td>
            <td>
                <input type="text" name="address" />
            </td>
			<td colspan = 2>
			<span class="btn btn-info" onClick="saveData()">Save</span>
            </td>
            </tr>
        `;
	tbody.innerHTML = newRow + tbody.innerHTML;
	mapEventAddNew();
	updateStatus = true;
};

//!!For Edit Press The Save BUTTON instead of Enter
const editRow = (index = "x") => {
	const nama = document
		.querySelectorAll("table > tbody > tr>td.idData")
		.forEach(function (x) {
			console.log(x);
		});
	const namas = usersFix[index].nama;
	const id = index + 1;
	console.log("id Users", index + 1);

	// console.log(namas);
	var lokasiRow = 0;
	const tdIdData = document.querySelectorAll("table > tbody > tr>td.idData");
	const tdNama = document.querySelectorAll("table > tbody > tr>td.cell-nama");
	const tdUmur = document.querySelectorAll("table > tbody > tr>td.cell-umur");
	const tdAlamat = document.querySelectorAll(
		"table > tbody > tr>td.cell-alamat"
	);
	const tdCrud = document.querySelectorAll("table > tbody > tr>td.Crud");
	const tdCruds = document.querySelectorAll("table > tbody > tr>td.Cruds");
	console.log("idData", tdIdData);

	for (let i = 0; i < tdIdData.length; i++) {
		if (id == tdIdData[i].textContent) {
			lokasiRow = i;
			console.log("Id found In table", tdIdData[i].textContent);
		}
	}
	// tdTable[index]
	// console.log(tdTable[3]);
	console.log("Row Index Location", lokasiRow);
	const newRowNama = `
            <tr>
            <td>
                <input type="text" name="name" />
            </td>
            </tr>
        `;
	const newRowUmur = `
			<tr>
			<td>
				<input type="text" name="umur" />
			</td>
			</tr>
		`;
	const newRowAlamat = `
			<tr>
			<td>
				<input type="text" name="address" />
			</td>
			</tr>
		`;
	const newRowCancel = `
			<tr>
			<td>
			<span class="btn btn-warning" onClick="location.reload()">Cancel</span>
			</td>
			</tr>
		`;
	const newRowCrud = `
			<tr>
			<td>
			<span class="btn btn-info" onClick="saveData(${index})">Save</span>
			</td>
			</tr>
		`;
	tdNama[lokasiRow].innerHTML = newRowNama;
	tdUmur[lokasiRow].innerHTML = newRowUmur;
	tdAlamat[lokasiRow].innerHTML = newRowAlamat;
	tdCruds[lokasiRow].innerHTML = newRowCancel;
	tdCrud[lokasiRow].innerHTML = newRowCrud;
	updateStatus = true;
};
const deleteRow = (item) => {
	usersFix.splice(item, 1);
	generateTable();
};
// const cancel = () => {
// 	document.querySelector("button").focus();
// };

const saveData = (index = "x") => {
	const name = document.querySelector("input[name='name']");
	const umur = document.querySelector("input[name='umur']");
	const address = document.querySelector("input[name='address']");

	// if (name.value == "Jansen" && address.value == "Medan") {
	// 	console.log("true");
	// } else {
	// 	console.log("false");
	// }
	if (index != "x") {
		if (name.value == "" || address.value == "") {
			document.querySelector("button").focus();
			return alert("Tolong diisi terlebih dahulu form yang disediakan");
		} else {
			if (isNumber(umur.value)) {
				if (umur.value > 100) {
					document.querySelector("button").focus();
					return alert("Umur Tidak boleh lebih dari 100");
				}
				console.log("yo");
				console.log(index);
				let userBaru = {
					nama: name.value,
					Umur: umur.value,
					alamat: address.value,
				};
				usersFix.splice(index, 1, userBaru);
				// users[index].nama = name.value;
				// users[index].Umur = umur.value;
				// users[index].alamat = address.value;
				console.log(usersFix);
				updateStatus = false;
				generateTable();
			} else {
				document.querySelector("button").focus();
				return alert("kolom Umur harus disi Angka");
			}
		}
	} else {
		if (name.value == "" || address.value == "" || umur.value == "") {
			document.querySelector("button").focus();
			return alert("Tolong diisi terlebih dahulu form yang disediakan");
		}
		if (isNumber(umur.value)) {
			if (umur.value > 100) {
				document.querySelector("button").focus();
				return alert("Umur Tidak boleh lebih dari 100");
			}
			usersFix.push({
				nama: name.value,
				Umur: umur.value,
				alamat: address.value,
			});
			updateStatus = false;
			generateTable();
		} else {
			document.querySelector("button").focus();
			return alert("kolom Umur harus disi Angka");
		}
	}
	updateStatus = false;
	generateTable();
};
const isNumber = (n) => {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};
const resetSearch = () => {
	document.querySelector('input[name="search"]').value = "";
};
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// event of change number of entries
const imgPop = (url) => {
	modal.style.display = "block";
	modalImg.src = url;
	// captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

const __init = () => {
	// generateTable();
	getUsers();
	resetSearch();
};
__init();
