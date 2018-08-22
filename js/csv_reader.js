var my_array

// read csv with D3...
d3.csv('csv/data.csv',
       function(row) {
           return {
               hour: row.hour,
               value: row.value
           }
       },
       function(error, rows) {
           my_array = rows
       })
