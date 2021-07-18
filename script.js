let pageConfig = {
	showData: 4,
	currentPage: 1,
	buttonPerPage: 4,
};
let users = [
	{
		id: 1,
		nama: "jansen",
		Umur: 35,
		alamat: "medan",
	},
	{
		id: 2,
		nama: "Alfa",
		Umur: 31,
		alamat: "jakarta",
	},
	{
		id: 3,
		nama: "joko",
		Umur: 10,
		alamat: "solo",
	},
	{
		id: 4,
		nama: "eko cahyonto",
		Umur: 20,
		alamat: "NTB",
	},
	{
		id: 5,
		nama: "Stanlie",
		Umur: 13,
		alamat: "Jatim",
	},
	{
		id: 6,
		nama: "Fian",
		Umur: 24,
		alamat: "malang",
	},
	{
		id: 7,
		nama: "harry rosadi",
		Umur: 31,
		alamat: "Papua",
	},

	{
		id: 8,
		nama: "Dimas",
		Umur: 23,
		alamat: "Bandung",
	},
	{
		id: 9,
		nama: "Sefrinaldi",
		Umur: 30,
		alamat: "Padang",
	},
	{
		id: 10,
		nama: "jansen rosadi",
		Umur: 74,
		alamat: "unknown",
	},
	{
		id: 11,
		nama: "Adzka",
		Umur: 30,
		alamat: "Yogyakarta",
	},
	{
		id: 12,
		nama: "Muhammad wawan",
		Umur: 55,
		alamat: "Galaxy",
	},
	{
		id: 13,
		nama: "aulia",
		Umur: 19,
		alamat: "medan",
	},
	{
		id: 14,
		nama: "janson",
		Umur: 21,
		alamat: "palembang",
	},
	{
		id: 15,
		nama: "Lathief",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Lathiefs",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "JOKO",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Eka",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Alwan",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Harry",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Sugeng",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "Purnomo",
		Umur: 30,
		alamat: "padang",
	},

	{
		id: 15,
		nama: "wantwo",
		Umur: 30,
		alamat: "padang",
	},
];
let filteredUsers = [];
let updateStatus = false;
const panjangDatalama = users.length;
console.log("panjang Data lama:", panjangDatalama);
const generateTable = (data = users) => {
	let tbody = document.querySelector("table > tbody");
	let tr = document.querySelectorAll("table > tr");
	let rows = "";

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
                <td align="center">${index + 1}</td>
                <td class="cell-nama">${user.nama}</td>
                <td class="cell-umur">${user.Umur}</td>
                <td class="cell-alamat">${user.alamat}</td>
				<td class="Cruds"><span class="btn btn btn-primary" onClick=editRow(${index}) >edit</span></td>
				<td class="Crud"><span class="btn btn btn-danger"onClick=deleteRow(${index})>delete</span></td>
            </tr>
        `;
	}
	tbody.innerHTML = rows;
	generatePagination(data);
};

const generatePagination = (data) => {
	const pagination = document.querySelector("div.pagination");
	let panjangDataBaru = users.length;
	console.log("Panjang Data Baru:", panjangDataBaru);
	let buttonPage = "";
	let pageAwal = 1;
	let pageAkhir = pageConfig.buttonPerPage;
	const totalPage = Math.ceil(data.length / pageConfig.showData);
	const batas = Math.floor(pageConfig.buttonPerPage / 2);

	if (data.length < users.length) {
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
	filteredUsers = users.filter((user) => {
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
            <td align="center">${users.length + 1}</td>
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

	updateStatus = true;
};

//!!For Edit Press The Save BUTTON instead of Enter
const editRow = (index = "x") => {
	// const nama = document
	// 	.querySelectorAll("table > tbody > tr")
	// 	.forEach(function (x) {
	// 		console.log(x);
	// 	});
	const namas = users[index].nama;
	console.log(namas);
	var lokasiRow = 0;
	const tdNama = document.querySelectorAll("table > tbody > tr>td.cell-nama");
	const tdUmur = document.querySelectorAll("table > tbody > tr>td.cell-umur");
	const tdAlamat = document.querySelectorAll(
		"table > tbody > tr>td.cell-alamat"
	);
	const tdCrud = document.querySelectorAll("table > tbody > tr>td.Crud");
	const tdCruds = document.querySelectorAll("table > tbody > tr>td.Cruds");

	for (let i = 0; i < tdNama.length; i++) {
		if (namas === tdNama[i].textContent) {
			lokasiRow = i;
			console.log(tdNama[i].textContent);
		}
	}
	// tdTable[index]
	// console.log(tdTable[3]);
	console.log(lokasiRow);
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
	users.splice(item, 1);
	generateTable();
};
// const cancel = () => {
// 	document.querySelector("button").focus();
// };

const saveData = (index = "x") => {
	const name = document.querySelector("input[name='name']");
	const umur = document.querySelector("input[name='umur']");
	const address = document.querySelector("input[name='address']");

	if (index != "x") {
		if (name.value == "" && address.value == "" && umur.value == "") {
			document.querySelector("button").focus();
			return alert("Tolong diisi terlebih dahulu form yang disediakan");
		}
		if (isNumber(umur.value)) {
			if (umur.value > 100) {
				document.querySelector("button").focus();
				return alert("Umur Tidak boleh lebih dari 100");
			}
			console.log("yo");
			console.log(index);
			users[index].nama = name.value;
			users[index].Umur = umur.value;
			users[index].alamat = address.value;
			updateStatus = false;
			generateTable();
		} else {
			document.querySelector("button").focus();
			return alert("kolom Umur harus disi Angka");
		}
	} else {
		if (name.value == "" && address.value == "" && umur.value == "") {
			document.querySelector("button").focus();
			return alert("Tolong diisi terlebih dahulu form yang disediakan");
		}
		if (isNumber(umur.value)) {
			if (umur.value > 100) {
				document.querySelector("button").focus();
				return alert("Umur Tidak boleh lebih dari 100");
			}
			users.push({
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

const __init = () => {
	generateTable();
	mapEventAddNew();
	resetSearch();
};
__init();
