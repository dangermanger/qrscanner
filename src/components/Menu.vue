<template>
    <header>

        <nav id="navbar navbar-default navbar-expand-md" class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <img src="/assets/img/logo.png" alt="SIBINTEK"  class="navbar-brand"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="nav nav-pills navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php"> <i class="fa fa-camera"></i> Сканер QR</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="../templates/Shushnur_PB.php"><i class="fa fa-object-group" aria-hidden="true"></i> Обьекты</a>
                    </li>
                    <li class="nav-item">
                        <a href="ftp://ftp.nanocad.ru/nanoCAD/NC51B(2039).exe" class="nav-link"><i class="fa fa-download" aria-hidden="true"></i> Редактирование схем</a>
                    </li>
                    <li class="nav-item">
                        <!-- Button trigger modal -->
                        <form class="form-inline">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".qrcode">
                                <!-- --><i class="fa fa-qrcode" aria-hidden="true"></i>
                            </button>
                        </form>
                    </li>

                </ul>
            </div>
        </nav>
        
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.navbar{
    background: #808080 !important;
    opacity: 0.97;
}
.navbar-brand{
    width: 12%;
}
.navbar-collapse{
    flex-direction: row-reverse;
}
.nav-link{
    color: white !important;
    font-family: Europe;
}
.nav-link:hover{
    color: #f4d053!important;
}
.nav-item>.form-inline>.btn-primary{
    font-size: 20px;
    padding: 1 1 1 1px !important;
    background-color: #808080;
    border: none;
    color: white;
}
.nav-item>.form-inline>.btn-primary:hover{
    color: white !important;
    background-color: #f4d053 !important;
    border: none;
}
@media screen and (max-width: 960px){
    .navbar-brand{
        width: 150px;
    }
}
</style>