<?php
    class orang {
        public $nama;
        function set_nama($nama) {
            $this->nama = $nama;
        }

    function get_nama() {
        return $this->nama;
        }
    }

    $orangPertama = new orang();
    $orangPertama->nama='Joko Permana';
    echo $orangPertama->get_nama();

?>
