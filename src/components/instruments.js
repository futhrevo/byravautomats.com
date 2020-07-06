import React from 'react';
import { instruments } from '../data';

const Instruments = () => {
  return (

    <div className="card mx-auto shadow bg-info text-white col-xs-6 col-md-4 mt-3">
      <div className="card-body">
        <h6 class="card-title">List of Instruments in Manufacturing unit</h6>
        <table class="table table-striped table-sm table-hover table-info">
          <tbody>
            {instruments.map(el => (
              <tr key={el}>
                <td className="pl-3">{el}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Instruments;
