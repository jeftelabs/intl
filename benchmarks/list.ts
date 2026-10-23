/*
 * @jeftelabs/intl
 *
 * (c) JefteLabs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import formatters from '../index.js'
// @ts-expect-error
import benchmark from 'benchmark'

const suite = new benchmark.Suite()

suite
  .add('ListFormat@memoize', function () {
    formatters
      .list('en-in', { style: 'short', type: 'disjunction' })
      .format(['Motorcycle', 'Bus', 'Car'])
  })
  .add('ListFormat', function () {
    new Intl.ListFormat('en-in', { style: 'short', type: 'disjunction' }).format([
      'Motorcycle',
      'Bus',
      'Car',
    ])
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
