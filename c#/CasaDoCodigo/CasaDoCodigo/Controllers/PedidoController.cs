using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CasaDoCodigo.Models;
using CasaDoCodigo.Models.ViewModel;

namespace CasaDoCodigo.Controllers
{
    public class PedidoController : Controller
    {
        private readonly IDataService _dataService;

        public PedidoController(IDataService dataService)
        {
            _dataService = dataService;
        }

        public IActionResult Carrosel()
        {
            var produtos = _dataService.GetProdutos();
            return View(produtos);
        }

        public IActionResult Carrinho()
        {
            CarrinhoViewModel carrinhoViewModel = GetCarrinhoViewModel();
            return View(carrinhoViewModel);
        }

        private CarrinhoViewModel GetCarrinhoViewModel()
        {
            var produtos = _dataService.GetProdutos();
            var itensCarrinho = _dataService.GetItensPedido();

            var carrinhoViewModel = new CarrinhoViewModel(itensCarrinho);
            return carrinhoViewModel;
        }

        public IActionResult Resumo()
        {
            CarrinhoViewModel carrinhoViewModel = GetCarrinhoViewModel();
            return View(carrinhoViewModel);
        }
    }
}