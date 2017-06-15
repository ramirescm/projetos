using CasaDoCodigo.Models;
using System.Collections.Generic;

namespace CasaDoCodigo
{
    public interface IDataService
    {
        void InicialiaDB();

        List<Produto> GetProdutos();

        List<ItemPedido> GetItensPedido();
    }
}