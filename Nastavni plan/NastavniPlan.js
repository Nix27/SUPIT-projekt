const ucitajKolegije = async () => {
    const response = await fetch('https://www.fulek.com/data/api/supit/curriculum-list/hr', {
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            'content-type': 'application/json'
        }
    });
    const data = await response.json();
    return data.data;
};

$(() => {
    $('#odabirKolegija').autocomplete({
        source: async (request, response) => {
            ucitajKolegije().then(data => {
                const filteredData = data.filter((item) => item.kolegij.includes(request.term));
                response(filteredData.map((item) => item.kolegij));
            });
        },
        select: async (e, ui) => {
            $('table').append('<tr><th>Kolegij</th><th>ECTS</th><th>Sati</th><th>Predavanja</th><th>Vježbe</th><th>Tip</th></tr>');
            ucitajKolegije().then(data => {
                const filteredData = data.filter((item) => item.kolegij === ui.item.label);
                const kolegij = filteredData.map((item) => item);
                $('table').append(`<tr><td>${kolegij[0].kolegij}</td><td>${kolegij[0].ects}</td><td>${kolegij[0].sati}</td><td>${kolegij[0].predavanja}</td><td>${kolegij[0].vjezbe}</td><td>${kolegij[0].tip}</td></tr>`);
            });
        }
    });
});