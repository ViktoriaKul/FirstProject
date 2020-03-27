import $ from 'jQuery'
let chk = document.getElementById('add')
$('#add').change(function () {
    if (chk.checked) {
        $('.in').append(`<div class="opa"><br><label id="t" type="text" name="second_field" >Add another text</label><input type="text" name="second_field" id="second_field" oninput="add()" value='m' ></input></div>`)
        const inp = document.getElementById("second_field")
        $('#second_field').on('input', function add() {
            const input = document.getElementById('second_field').getAttribute('name');
            localStorage.setItem(input, inp.value)
        })
        const m = localStorage.getItem('second_field')
        document.getElementById('second_field').value = m;
    }
    else {
        $('.opa').remove()
    }
});

const sbm = $('form')
sbm.submit(function () {
    if (sbm.submit) {
        if (chk.checked) {
            const id1 = $("#first_field").attr('name');
            const val1  = $("#first_field").val();
            const id2 = $('#add').attr('name');
            const val2 = $('#add').val() ;
            const id3 = $('#second_field').attr('name');
            const val3 = $('#second_field').val();
            let param = `${id1} = ${val1} \n${id2} = ${val2} \n ${id3} = ${val3}`
            alert(param);
        }
        else {
            const id1 = $("#first_field").attr('name');
            const val1  = $("#first_field").val();
            let param = `${id1} = ${val1}`;
            alert(param);
        }
    }
})