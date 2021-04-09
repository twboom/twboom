function fetchFiles() {
    for (category in fetchData.files) {
        const cat = fetchData.files[category];
        fetchData.data[cat.output] = {}
        const output = fetchData.data[cat.output];

        for (let i = 0; i < cat.files.length; i++) {
            const fileName = cat.files[i];
            const path = `${cat.folder}/${fileName}.${cat.extension}`;
            fetch(path)
                .then(response => response.text())
                .then(html => {
                    fetchData.data[cat.output][fileName] = html
                })
        }        
    }
}

fetchFiles()