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
                const filteredData = data.filter((item) => item.kolegij.startsWith(request.term));
                response(filteredData.map((item) => item.kolegij));
            });
        },
        select: () => {
            console.log($('table'));
        }
    });
});