import React from 'react';
import './Filter.css'


const FilterGroup = () =>{
    return(
<div>
      <select className="form-control">
        <option disabled defaultValue>Ordenar</option>
        <option>Preço: mais barato</option>
        <option>Preço: mais caro</option>
      </select>

      <h5>Filtrar por</h5>
      <hr />
      
      <h6>Marcas</h6>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="marcaAdiddas" />
        <label className="form-check-label" htmlFor="marcaAdiddas">Adiddas</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="marcaCalenciaga" />
        <label className="form-check-label" htmlFor="marcaCalenciaga">Calenciaga</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="marcaKSwiss" />
        <label className="form-check-label" htmlFor="marcaKSwiss">K-Swiss</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="marcaNike" />
        <label className="form-check-label" htmlFor="marcaNike">Nike</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="marcaPuma" />
        <label className="form-check-label" htmlFor="marcaPuma">Puma</label>
      </div>

      <h6>Categorias</h6>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="categoriaEsporteLazer" />
        <label className="form-check-label" htmlFor="categoriaEsporteLazer">Esporte Lazer</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="categoriaCasual" />
        <label className="form-check-label" htmlFor="categoriaCasual">Casual</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="categoriaUtilitario" />
        <label className="form-check-label" htmlFor="categoriaUtilitario">Utilitário</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="categoriaCorrida" />
        <label className="form-check-label" htmlFor="categoriaCorrida">Corrida</label>
      </div>

      <h6>Gênero</h6>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="generoMasculino" />
        <label className="form-check-label" htmlFor="generoMasculino">Masculino</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="generoFeminino" />
        <label className="form-check-label" htmlFor="generoFeminino">Feminino</label>
      </div>

      <h6>Estado</h6>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="estadoNovo" />
        <label className="form-check-label" htmlFor="estadoNovo">Novo</label>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="estadoUsado" />
        <label className="form-check-label" htmlFor="estadoUsado">Usado</label>
      </div>
    </div>

    )

}
export default FilterGroup