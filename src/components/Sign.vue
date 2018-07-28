<template>
  <b-container class="w-25 text-left">
    <b-nav fill tabs>
      <b-nav-item to="sign-in">Sign In</b-nav-item>
      <b-nav-item to="sign-up">Sign Up</b-nav-item>
    </b-nav>

    <b-card>
      <h2 class="text-center">DisysBot</h2>
      <b-card-body>
        <slot></slot>
      </b-card-body>
    </b-card>
  </b-container>
</template>

