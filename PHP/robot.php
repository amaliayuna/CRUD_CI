<?php
    class robotDua {
        public $suara;
        public $berat;

        //public function berat robot blablabla
        public function set_suara($swara) {
            $this->suara = $swara;
        }
        public function bersuara() {
            return $this->suara.
            "<br/>";
        }
        public function set_berat($bunyi) {
            $this->berat = $bunyi;
        }
        public function berberat() {
            return $this->berat;
        }
    }
    $robotcop = new robotDua;
    $robotcop->set_suara('ngik ngok');
    $robotcop->set_berat('20');
    echo " suaranya ".$robotcop->bersuara();
    echo " berat ".$robotcop->berberat()." kilo";
    //berhasil menampilkan variabel suara
    //dari kelas robotcop
    /* tidak bisa
    echo $robotcop;
    echo $suara;
    var_dump($robotcop);
    */
?>
