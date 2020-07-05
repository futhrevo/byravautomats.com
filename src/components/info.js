import React from 'react';
import { details } from '../data';

const CompanyInfo = () => {
  return (
    <table class="table table-striped table-sm table-hover text-white">
      <tbody>
        {details.map(el => (
          <tr key={el[0]}>
            <td className="pl-3">{el[0]}</td>
            <td>{el[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompanyInfo;
