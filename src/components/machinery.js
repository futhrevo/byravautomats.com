import React from 'react';
import { machines } from '../data';

const Machinery = () => {
  return (
    <div className="card mx-auto shadow bg-info text-white col col-sm-12 col-md-7 mt-3">
      <div className="card-body">
        <h6 class="card-title">List of Machinery in Manufacturing unit</h6>
        <div class="table-responsive">
          <table class="table table-striped table-sm table-hover shadow table-info">
            <thead>
              <tr>
                <th className="pl-3" scope="col">Machinery</th>
                <th scope="col">Capacity</th>
              </tr>
            </thead>
            <tbody>
              {machines.map(el => (
                <tr key={el[1]}>
                  <td className="pl-3">{el[0]}</td>
                  <td>{el[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Machinery;
