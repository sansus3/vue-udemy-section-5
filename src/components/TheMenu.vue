<template>
    <header>
        <nav class="navbar navbar-expand">
            <ul class="navbar-nav">
                <li class="nav-item">           
                    <RouterLink class="nav-link" :to="{name:'home'}">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/contact">Contacto</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name:'favorites'}">Favoritos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
