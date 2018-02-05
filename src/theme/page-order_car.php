<?php get_header(); ?>
    <!-- container -->
    <div class="container">
        <table align="center" style="width:50%">
					<tr>
					  <td>Пункт А:<div id="pointA"></div></td>
            <td>Пункт Б:<div id="pointB"></div></td>
          </tr>
          <tr>
            <td>Координаты:<div id="map_coordsA"></div></td>
            <td>Координаты<div id="map_coordsB"></div></td>
          </tr>
         <tr>
          <td colspan="2">Расстояние:<div id="Route_length"></div></td>
        </tr>
      </table>
      <div id="map" style="width: 1200px; height: 1000px"></div>
  </div>

    <!-- /container -->
<?php get_footer(); ?>