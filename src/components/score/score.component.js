import { Component } from "../component";

const Score = new Component ('score',
`
<div class="score">
          <table class="table-score">
            <thead>
              <tr class="table__header">
                <th class="th__place">Место</th>
                <th class="th__name">Имя</th>
                <th class="th__answers">Ответов</th>
                <th class="th__time">Время</th>
                <th class="th__type">Tип</th>
                <th class="th__category">Категория</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tr__data tr__data-1">
                <td class="th__place">lorem</td>
                <td class="th__name">lorem</td>
                <td class="th__answers">lorem</td>
                <td class="th__time">lorem</td>
                <td class="th__type">lorem</td>
                <td class="th__category">lorem</td>
              </tr>
            </tbody>
          </table>
        </div>
`,


)

export {Score};