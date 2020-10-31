import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-consultor',
  templateUrl: './consultor.component.html',
  styleUrls: ['./consultor.component.scss']
})
export class ConsultorComponent implements OnInit {

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
            $('.delete').hide();
            break;
          case 'delete-tab':
            $('.update').hide();
            break;
          default:
            $('.update').hide();
            $('.delete').hide();
            break;
        }
      });

      $('.search').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $(".info").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
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