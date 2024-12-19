const { createApp } = Vue;

createApp({
  template: `
    <center><table>
      <tr>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Población</th>      

      </tr>
      <tr v-for="felino in paginatedFelinos">
        <td><img :src="felino.imagen" :alt="felino.nombre" width="100" height="100" /></td>
        <td>{{ felino.nombre }}</td>
        <td>{{ felino.poblacion }}</td>
      </tr>
    </table></center>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
    </div>
  `,
  data() {
    return {
      felinos: [
        { id: 1, nombre: "Caracal", poblacion: "4.700.000", imagen: "img/caracal.webp" },
        { id: 2, nombre: "Guepardo", poblacion: "7.000", imagen: "img/guepardo.webp" },
        { id: 3, nombre: "Jaguar", poblacion: "30.000", imagen: "img/jaguar.webp" },
        { id: 4, nombre: "Leon", poblacion: "122.000", imagen: "img/leon.webp" },
        { id: 5, nombre: "Leopardo", poblacion: "5.000", imagen: "img/leopardo.webp" },
        { id: 6, nombre: "Leopardo de las nieves", poblacion: "7.500", imagen: "img/leopardoNieves.webp" },
        { id: 7, nombre: "Lince iberico", poblacion: "2.000", imagen: "img/lince.webp" },
        { id: 8, nombre: "Ocelote", poblacion: "100", imagen: "img/ocelote.webp" },
        { id: 9, nombre: "Puma", poblacion: "50.000", imagen: "img/puma.webp" },
        { id: 10, nombre: "Tigre", poblacion: "5000", imagen: "img/tigre.webp" },
       
       
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.felinos.length / this.itemsPerPage);
    },
    paginatedFelinos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.felinos.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
