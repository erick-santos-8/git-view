export function formatMemberSince(inputDateString){
    const options = {month: "short", day: "2-digit", year: "numeric"};
    const formattedDate = new Date(inputDateString).toLocaleDateString("pt-BR", options);
    return formattedDate;
}

export function formatDate(inputDateString) {
	const months = [
		"Jan",
		"Fev",
		"Mar",
		"Abr",
		"Mai",
		"Jun",
		"Jul",
		"Ago",
		"Set",
		"Out",
		"Nov",
		"Dez",
	];

	const date = new Date(inputDateString);
	const monthName = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();
	
	const formattedDate = `${day} de ${monthName} de ${year}`;
	return formattedDate;
}