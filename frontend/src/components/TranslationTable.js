import React, {createElement} from 'react';
import '@axa-ch/button'
import axaTable from '@axa-ch/table/lib/index.react';

const AXATableReact = axaTable(createElement);


export default function TranslationTable() {


    return (
        <AXATableReact innerscroll="500">
            <table className="any-for-test">
                <thead>
                <tr>
                    <th aria-required="true">APP-ID</th>
                    <th>Titel 2</th>
                    <th>Titel 3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Body 1</td>
                    <td className="o-table--light">Longer Body 2</td>
                    <td className="o-table--bold">Super Long Body 3</td>
                </tr>
                <tr>
                    <td>Body A1 AA</td>
                    <td className="o-table--light">Longer Body A2</td>
                    <td className="o-table--bold">Super Long Body A3</td>
                </tr>
                <tr>
                    <td>Body B1</td>
                    <td className="o-table--light">Longer Body B2</td>
                    <td className="o-table--bold">Super Long Body B3</td>
                </tr>
                </tbody>
            </table>
        </AXATableReact>
    );
}
