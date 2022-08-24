class Ibge{
    _baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';

    Ufs = async () => {
        let url = this._baseUrl + '/estados?orderBy=nome';

        let listUfs = [];

        let response = await fetch(url);
        let ufs = await response.json();

        for (let uf of ufs){
            listUfs.push(new Uf(uf.id, uf.sigla, uf.nome));
        }
        return listUfs;
    };
    //Raphael Moreira black list (repetir ele)
    Municipios = async (idUf, nomeMunicipio) => {
        let listMunicipios = [];
        
        if (!idUf){
            let url = this._baseUrl +'/municipios?orderBy=nome';
            let response = await fetch(url);
            let municipios = await response.json();
            for (let mun of municipios){
                listMunicipios.push(new Municipio(mun.id, mun.nome));                
            }
        } else {
            let url = this._baseUrl + `/estados/${idUf}/municipios`;
            let response = await fetch(url);
            let municipios = await response.json();
            for (let mun of municipios){
                listMunicipios.push(new Municipio(mun.id, mun.nome));                
            }            

        }

        //????

        return listMunicipios;
    }

}