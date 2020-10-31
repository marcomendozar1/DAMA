import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) {
    auth.isAlive().then((res) => {
      if (!res) {
        this.route.navigate(['login']);
      }
    }).catch(err => console.log('err', err));
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.opcion').on('click', function () {
        $('.info').show();
        $('.search').val('');
        $('#zona-riesgo').val('0');
        $('#noAdd').addClass('fade');
        if (!($(this).attr('id') === 'add-tab' || $(this).attr('id') === 'home-tab')) {
          $('#noAdd').removeClass('fade');
        }
        $('.update').show();
        $('.delete').show();
        switch ($(this).attr('id')) {
          case 'update-tab':
            $('#status').val('update');
            $('.delete').hide();
            break;
          case 'delete-tab':
            $('#status').val('delete');
            $('.update').hide();
            break;
          default:
            $('#status').val('both');
            $('.update').hide();
            $('.delete').hide();
            break;
        }
      });

      $('.search').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".busqueda").filter(function () {
          $(this).parent('div').toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      $('#zona-riesgo').on('change', function () {
        $('.info').show();
        var value = $(this).val();
        $('.' + value).filter(function () {
          $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf("true") > -1)
        });


      });
    });
  }

  logout() {
    this.auth.logout().then((res) => {
      this.route.navigate(['login']);
    }).catch(err => console.log('err', err));
  }
}
