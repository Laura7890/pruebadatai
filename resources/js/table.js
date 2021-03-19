const currency = $.fn.dataTable.render.number( ',', '.', 0, '$' );
$("#datatable").DataTable({
    data: data,
    responsive: true,
    language: {
        decimal: ".",
        thousands: ",",
        paginate: {
            "first":      "Primero",
            "last":       "Último",
            "next":       "Siguiente",
            "previous":   "Anterior"
        },
        search: "Buscar:"
    },
    columns: [
            {data:'Time'},
            {data:'Symbol'},
            {data:'Target price'},
            {data:'Previuse_Clouse', render: currency},
            {data:'Reference_price', render: currency},
            {data:'Last_Trade', render: currency},
            {data:'Qty'},
            {data:'Change1'},
            {data:'Change2', render: currency},
            {data:'Ask', render: currency},
            {data:'Bid', render: currency},
            {data:'AVG', render: currency},
            {data:'Low', render: currency},
            {data:'High', render: currency},
            {data:'Volume', render: currency}
        ],
    createdRow: function (row, data, index) {
        $('td', row).eq(3).css('color', 'orange');
        $('td', row).eq(4).css('color', 'orange');
        if(data.Change1  < 0){
            $('td', row).eq(7).css({'color': 'red'});
            $('td', row).eq(8).css({'color': 'red'});
        }else{
            $('td', row).eq(7).css({'color': 'green'});
            $('td', row).eq(8).css({'color': 'green'});
        }
    }
});