document.querySelectorAll("button")[0].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[1].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[2].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[3].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[4].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[5].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})

document.querySelectorAll("button")[6].addEventListener("click", function() {
    document.body.classList.toggle("popup--aberto");
})



function showToast(mensagem) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Evento de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // remove quando tiver backend real

    showToast("Login realizado com sucesso!");

    // Redirecionamento opcional:
    // setTimeout(() => window.location.href = "home.html", 1500);
});


/* Success redirect: adiciona contador e redireciona da página de sucesso */
(function(){
    function successRedirect(opts){
        opts = opts || {};
        var seconds = typeof opts.seconds === 'number' ? opts.seconds : 3;
        var redirectTo = opts.redirectTo || 'index.html';
        var clearStorage = !!opts.clearStorage;
        var box = document.querySelector('.sucesso-box');
        if (!box) return;
        var p = document.createElement('p');
        p.id = 'redirect-countdown';
        p.style.marginTop = '12px';
        p.style.fontSize = '0.95rem';
        p.textContent = 'Você será redirecionado em ' + seconds + 's';
        box.appendChild(p);
        var interval = setInterval(function(){
            seconds--;
            var el = document.getElementById('redirect-countdown');
            if (el) el.textContent = 'Você será redirecionado em ' + seconds + 's';
            if (seconds <= 0){
                clearInterval(interval);
                try{ if (clearStorage){ sessionStorage.clear(); localStorage.removeItem('authToken'); } }catch(e){}
                try{ history.replaceState(null, '', redirectTo); }catch(e){}
                window.location.href = redirectTo;
            }
        }, 1000);
        try{ history.replaceState({page:'success'}, '', location.href); }catch(e){}
    }

    document.addEventListener('DOMContentLoaded', function(){
        if (document.querySelector('.sucesso-box')){
            successRedirect({seconds:3, redirectTo: 'index.html', clearStorage: true});
        }
    });
})();


/* ADMIN PANEL: Gerenciamento de Produtos e Planos */
(function(){
    // Filtros de produtos
    const filtroBoxes = document.querySelectorAll('.filtro-box');
    const produtosList = document.getElementById('produtos-list');

    filtroBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            
            // Toggle ativo
            this.classList.toggle('active');
            
            // Emitir evento ou fazer requisição ao backend
            console.log('Filtro selecionado:', categoria);
            // fetch(`/api/produtos?categoria=${categoria}`)
            //     .then(res => res.json())
            //     .then(data => atualizarListaProdutos(data))
        });
    });

    // Função para adicionar nova categoria
    const btnAdicionarCategoria = document.getElementById('btn-adicionar-categoria');
    if(btnAdicionarCategoria){
        btnAdicionarCategoria.addEventListener('click', function(){
            const nomeProduto = prompt('Digite o nome da nova categoria:');
            if(nomeProduto){
                adicionarFiltroCategoria(nomeProduto);
            }
        });
    }

    window.adicionarFiltroCategoria = function(nomeProduto){
        const filtrosGrid = document.getElementById('filtros-grid');
        const novoFiltro = document.createElement('div');
        novoFiltro.className = 'filtro-box';
        novoFiltro.setAttribute('data-categoria', nomeProduto.toLowerCase());
        novoFiltro.innerHTML = `
            <i class="fas fa-box"></i>
            <span>${nomeProduto}</span>
        `;
        
        // Insere antes do botão "Adicionar"
        filtrosGrid.insertBefore(novoFiltro, btnAdicionarCategoria);
        console.log('Categoria adicionada:', nomeProduto);
    };

    // Função para atualizar lista de produtos
    window.atualizarListaProdutos = function(produtos) {
        if (!produtosList) return;
        
        produtosList.innerHTML = '';
        
        if (produtos.length === 0) {
            produtosList.innerHTML = '<p style="text-align:center; color:#999;">Nenhum produto encontrado.</p>';
            return;
        }
        
        produtos.forEach(produto => {
            const item = document.createElement('div');
            item.className = 'produto-item';
            item.innerHTML = `
                <div class="produto-info">
                    <h4>${produto.nome}</h4>
                    <p class="categoria-produto">Categoria: <span>${produto.categoria}</span></p>
                    <p class="preco-produto">Preço: <span>R$ ${parseFloat(produto.preco).toFixed(2)}</span></p>
                    <p class="estoque-produto">Estoque: <span>${produto.estoque} unidades</span></p>
                </div>
                <div class="produto-acoes">
                    <button class="btn-editar" onclick="editarProduto(${produto.id})"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn-deletar" onclick="deletarProduto(${produto.id})"><i class="fas fa-trash"></i> Deletar</button>
                </div>
            `;
            produtosList.appendChild(item);
        });
    };

    // Funções de ação
    window.editarProduto = function(id) {
        console.log('Editar produto:', id);
        alert('Funcionalidade de edição será implementada');
    };

    window.deletarProduto = function(id) {
        if (confirm('Tem certeza que deseja deletar este produto?')) {
            console.log('Deletar produto:', id);
            alert('Funcionalidade de deleção será implementada');
        }
    };

    // Tratamento do formulário de novo plano
    const formNovoPlano = document.getElementById('form-novo-plano');

    if (formNovoPlano) {
        formNovoPlano.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const novoPlano = {
                nome: document.getElementById('plano-nome').value,
                descricao: document.getElementById('plano-descricao').value,
                preco: document.getElementById('plano-preco').value,
                status: document.getElementById('plano-status').value
            };
            
            console.log('Novo plano:', novoPlano);
            
            // fetch('/api/planos', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(novoPlano)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     alert('Plano salvo com sucesso!');
            //     formNovoPlano.reset();
            // })
            
            alert('Plano será salvo quando conectado ao backend');
            this.reset();
        });
    }

    // Busca de produtos em tempo real
    const searchInput = document.getElementById('searchinput');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const termoBusca = e.target.value.toLowerCase();
            console.log('Buscando:', termoBusca);
            // Implementar lógica de busca aqui
        });
    }
})();


/* PERFIL ADMIN: Alterar Email e Senha */
(function(){
    const formAlterarEmail = document.getElementById('form-alterar-email');
    if(formAlterarEmail){
        formAlterarEmail.addEventListener('submit', function(e){
            e.preventDefault();
            console.log('Formulário email enviado');
            alert('Email será atualizado no backend.');
            this.reset();
        });
    }
    
    const formAlterarSenha = document.getElementById('form-alterar-senha');
    if(formAlterarSenha){
        formAlterarSenha.addEventListener('submit', function(e){
            e.preventDefault();
            console.log('Formulário senha enviado');
            alert('Senha será atualizada no backend.');
            this.reset();
        });
    }
})();


/* RELATÓRIOS: buscar e renderizar relatórios de vendas */
(function(){
    function formatCurrency(value){
        return 'R$ ' + Number(value).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
    }

    function renderReportSummary(data){
        const totalEl = document.getElementById('metric-total');
        const countEl = document.getElementById('metric-count');
        const avgEl = document.getElementById('metric-average');
        if(!totalEl || !countEl || !avgEl) return;
        totalEl.textContent = formatCurrency(data.total || 0);
        countEl.textContent = data.count || 0;
        avgEl.textContent = formatCurrency(data.average || 0);
    }

    function renderReportTable(rows){
        const tableEl = document.getElementById('relatorio-table');
        if(!tableEl) return;
        if(!rows || rows.length === 0){
            tableEl.innerHTML = '<p style="color:#666; text-align:center;">Nenhum registro encontrado para o período.</p>';
            return;
        }

        let html = '<table class="table-report" style="width:100%; border-collapse:collapse"><thead><tr style="background:#f0f9fa"><th style="padding:8px; text-align:left">Data</th><th style="padding:8px; text-align:left">Pedido</th><th style="padding:8px; text-align:right">Valor</th></tr></thead><tbody>';
        rows.forEach(r => {
            html += `<tr><td style="padding:8px">${r.date}</td><td style="padding:8px">${r.orderId || '-'}</td><td style="padding:8px; text-align:right">${formatCurrency(r.value || 0)}</td></tr>`;
        });
        html += '</tbody></table>';
        tableEl.innerHTML = html;
    }

    function fetchReport(params){
        // params: { period: 'mensal' } or {start:'YYYY-MM-DD', end:'YYYY-MM-DD'}
        const qs = params.period ? `?period=${encodeURIComponent(params.period)}` : `?start=${encodeURIComponent(params.start)}&end=${encodeURIComponent(params.end)}`;
        const url = '/api/relatorios' + qs; // ajuste conforme backend
        // placeholder: usar fetch quando backend disponível
        console.log('Requisição de relatório para:', url);

        // Simulação de retorno enquanto backend não conectado
        setTimeout(()=>{
            const fake = {
                total: 1250.50,
                count: 18,
                average: 69.47,
                rows: [
                    {date:'2025-12-09', orderId: 'PED123', value: 120.00},
                    {date:'2025-12-09', orderId: 'PED124', value: 80.50},
                ]
            };
            renderReportSummary(fake);
            renderReportTable(fake.rows);
        }, 800);

        /* Exemplo com fetch real:
        fetch(url)
            .then(r => r.json())
            .then(data => {
                renderReportSummary(data.summary);
                renderReportTable(data.rows);
            }).catch(err => {
                console.error('Erro ao buscar relatório:', err);
            });
        */
    }

    // Listeners
    document.addEventListener('click', function(e){
        const btn = e.target.closest && e.target.closest('.btn-rel');
        if(!btn) return;
        const period = btn.getAttribute('data-period');
        if(period){
            fetchReport({period});
        }
    });

    const btnCustom = document.getElementById('btn-custom');
    if(btnCustom){
        btnCustom.addEventListener('click', function(){
            const start = document.getElementById('data-inicio').value;
            const end = document.getElementById('data-fim').value;
            if(start && end){
                fetchReport({start, end});
            }
        });
    }
})();